---
title: Using the CMS
authors:
  - rdebeasi
  - springdo
date: 2017-10-19T21:03:59.000Z
---

This documentation covers using Netlify CMS to write content for the Open Practice Library. At a high level the workflow is fairly simple:

1. On a practice page or the home page hit the `Improve` or `Add new` button to launch the CMS.
1. Login with your GitHub Account. (If you don't have an account you can [create one here](https://github.com/join). Don't worry, it's free to create an account!)
1. Once logged into the CMS, pick the `Practice` or `How To` guide you want to implement or improve.
1. Update it with your changes and remember to append your `github` username to the end of the authors list.
1. Make your changes and hit `Save`. The moderators will pick up the changes from there!

For even more details on these, see the guides below for Content Writers and Content Moderators:

---

## Adding or updating practices (Content Writers)

### Pre-requisites
If you're new to the CMS and have not created content before; there are two things you need to do before creating content

1. To create or edit a practice, you will need a [Github](https://github.com) account. You don't need to have any content in Github as it is only used for authentication purposes.
2. With a Github account created [add your author information](https://openpracticelibrary.com/admin/#/collections/author/new) to the CMS by filling in the fields (only name and gitusername are mandatory). Hit save and this will create a Pull Request to add your author into the Git repository.
![example-author](/images/contributing/author.png)

### Creating Content

_Before you continue, please check the Pre-Requisites above (for example, that you have a valid GitHub.com account)_

We are using [Netlify CMS](https://www.netlifycms.org/) to update this content.

- Visit <a target="" href="https://openpracticelibrary.com/admin/">Netifly Admin Page </a> and click "Login with Netifly Identity".
- Select "Continue with GitHub" and enter your Github credentials.
- Click "New Practices".
- Fill in the Title with the name of your Practice and the subtitle with something catchy to describe your content. Leave the publish date as is.
- To include a splash image for your practice add one to the Jumbotron
- Add a tile icon image to the practice for it to appear on the homepage.
- Add your `Github` username to the list of Authors to get a writers credit.
- From the Mobius dropdown select where your article fits
- You can either use Rich Text or Markdown format for the content.  Rich Text could be easier for non-technical people and you can use the style icons at the top of the Body section to add headers and formatting.

Once you have added your content, click the blue "Save" button at the top of the screen.

Change the Status to "In Review".

This will raise a pull request on the underlying Github repository which can then be actioned by one of the site moderators.  

<b>If you try to publish the Practice yourself, you will see an error as it needs to be curated by a moderator.</b>

<b>You will receive emails once the content has been actioned. </b>

These actions could be to add/change or content if everything is good, you will receive and email saying that the content has been merged (accepted in to the library).

### Editing Content
You can use the first steps in the above workflow to edit content.  Select the practice you wish edit.  Don't forget to update the date and click "Save" once you have edited the content.  

An email will be sent to the moderators who will approve the change.

#### Guidance for Content Writers

A simple template is shown below which contains some example headers for use when creating a new `Practice` within the Library.

|Header|Comment|
|----------------|--------|
|What is it?| A brief description of the practice|
|Why use it?| A short paragraph describing the use case(s) for the use of this practice. |
|How does it fit? | Relevant section(s) of the Open Practice Library for which this practice can be used|
|Related Practices| Which practices can be used in conjunction, before or after this practice|

If you are creating a `How to` or facilitation guide, some additional fields need to be filled out in the CMS such as the difficulty of the exercise and the people required to run the session. Some example headings for a How to guide should include, but are not limited to, the following

|Header|Comment|
|----------------|--------|
|What is it?| A brief description of the practice|
|Materials Needed|What materials are required to run the practice? For example, a large whiteboard, sticky notes, whiteboard markers etc|
|Steps| Short, concise description of the things needed to accomplish the goal of the activity. Pictures and videos included in here will really help. |
|Templates| Any reference material such as canvas or other printouts needed|
|External Examples| Any external resources or use cases, blogs etc that can help learners who want to learn more|

---

## Publishing Content (Moderators)
As a moderator, you will receive and email to say that new content has been added:
<pre>
Automatically generated by Netlify CMS
You can view, comment on, or merge this pull request online at:
  https://github.com/openpracticelibrary/practice-library/pull/9
Commit Summary
    Create Practices “chrisj-test-of-workflow”
File Changes
    A content/practices/chrisj-test-of-workflow.md (5)
Patch Links:
    https://github.com/openpracticelibrary/practice-library/pull/9.patch
    https://github.com/openpracticelibrary/practice-library/pull/9.diff
—
You are receiving this because you are subscribed to this thread.
Reply to this email directly, view it on GitHub, or mute the thread.
</pre>

### Steps to fix
 - Go to the [Pull Request Page](https://github.com/openpracticelibrary/practice-library/pulls) and click on the relevant pull request or follow the link in the email.  
 - To see what has been added / changed, go to the "Files changed" tab.
 - If you require more information or would like changed to be made, write the comment in the "Leave a Comment" box.  

_Note: Add @username in the comment so the originator receives the email.  The originators user name can be found in the "Commits" tab._

 - If you are happy with the content and there are no conflicts, click the "Merge pull Request" button followed by the "Confirm Merge" button.  Add some additional comments if required.
 - Once merged, delete the branch (this will hopefully be automated at some point) as there is an issue with the CMS that does not allow people to create further edits while it still exists. <b>Click the "Delete Branch" button on the PR's page.</b>
 - This act will deploy the changes to the `staging` environment. To deploy the change to the main site, raise a PR from `staging` to `master`. On GitHub, navigate to the `staging` branch which should be ahead of `master` and hit raise PR. Merge the change set as you did before.
 - If you go back to the [List of Practices](https://openpracticelibrary.com/admin/#/collections/practices) you should see the newly added practice.

 <i>Note: The order is a little quirky at the moment - not sure why.  It's mainly alphabetical with a few exceptions.</i>
