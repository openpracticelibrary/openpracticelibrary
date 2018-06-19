from os import walk, path
from sys import exit, stderr
import re
import json

file_paths = []

def gather_markdown():
    """ 
        Gather practice files to be searched
        Store in file_paths array
    """

    # verify site is built
    if(path.exists("./docs")):
        stderr.write("docs directory detected: script must be run before web files are built\n")
        exit(-1)

    # Walk and save markdown directories
    for root, dirs, files in walk("./content/practices"):
        for file_name in files:
            if file_name.endswith(".md"):
                file_paths.append("%s/%s" % (root, file_name))
                

def create_index():
    """ 
        Open and parse practice files into a single JSON index 
        Stores in ./static/SearchIndex.js
    """

    md_dict = {}
    md_fields = []
    md_header, content_string  = "", ""

    for path in file_paths:
        content = open(path, 'r').read()
        
        # Ensure header exists for markdown files
        if(len(re.findall("---\n", content)) != 2):
            stderr.write("markdown file %s improper header \n" % path +\
                          "for hugo markdown formatting https://gohugo.io/content-management/formats/")
            exit(-1)
        
        content_segments = content.split("---\n")

        # Format meta-data
        for md_header in content_segments[1].split('\n'):
            if(not md_header or md_header.startswith('#')):
                continue

            md_fields = md_header.split(':')
            md_dict[md_fields[0]] = md_fields[1]

        # Format content
        md_dict["url"] = path[path.find('/practices'):-3]
        md_dict["content"] = content_segments[2]
        path = path[path.find('/practices'):-3]
        content_string += json.dumps(md_dict)

        if(path == file_paths[-1]):
            content_string += "\n"
        else:
            content_string += ",\n"

        md_dict = {}

    # Open and write to index file 
    search_index = open("./static/SearchIndex.js", "w+")
    search_index.write("var index = [\n")
    search_index.write(content_string)
    search_index.write("]")


if __name__ == "__main__":
    gather_markdown()
    create_index()
