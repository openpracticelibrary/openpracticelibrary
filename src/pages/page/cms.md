---
title: Using the CMS
authors:
  - rdebeasi
  - springdo
date: 2017-10-19T21:03:59.000Z
---
This documentation covers using Netlify CMS to write content for the Open Practice Library. At a high level the workflow is fairly simple:

1. On a practice page hit `Improve This Practice` or to propose a new practice select `Add a Practice` within the navigation sidebar.
2. Login with your GitHub Account. (If you don't have an account you can [create one here](https://github.com/join). Don't worry, it's free to create an account!)
3. Once logged into the CMS, pick the `Practice` you want to implement or improve.
4. Update it with your changes and remember to append your `github` username to the end of the authors list.
5. Make your changes and hit `Save`. The moderators will pick up the changes from there!

For even more details on these, see the guides below for Content Writers and Content Moderators:

- - -

## Adding or Updating Practices (Content Writers)

### Pre-requisites

If you're new to the CMS and have not created content before; there are two things you need to do before creating content

1. To create or edit a practice, you will need a [GitHub](https://github.com) account. You don't need to have any content in GitHub as it is only used for authentication purposes.
2. With a GitHub account created [add your author information](/admin/#/collections/author/new) to the CMS by filling in the fields (only name and github username are mandatory). Hit save and this will create a Pull Request to add your author into the Git repository.

   ![example-author](/images/contributing/author.png)

### Creating Content

*Before you continue, please check the Pre-Requisites above (for example, that you have a valid GitHub.com account)*

We are using [Netlify CMS](https://www.netlifycms.org/) to update this content.

* Visit [Netifly Admin Page](/admin/) and click "Login with Netifly Identity".
* Select "Continue with GitHub" and enter your GitHub credentials.
* Click "New Practices".
* Fill in the Title with the name of your Practice and the subtitle with something catchy to describe your content. Leave the publish date as is.
* Add your `GitHub` username to the list of Authors to get a writers credit.
* Add a Mobius Loop Tag (required) and additional optional Tags in the drop-down to organize your practice based on where it falls on the [Mobius Loop](/learn/).
* Add a cover image to the practice for it to appear on the homepage.
* You can either use Rich Text or Markdown format for the content.  Rich Text could be easier for non-technical people and you can use the style icons at the top of the Body section to add headers and formatting.
* Select the `Add media gallery` to add media content that is relevant to helping others understand your practice.
* Select the `Add links we love` to add articles, podcasts, videos, etc. that are also helpful to understanding and facilitating your practice.
* Fill in the additional optional fields if you have that information or suggestions.

Once you have added your content, click the blue "Save" button at the top of the screen.

Change the Status to "In Review".

This will raise a pull request on the underlying GitHub repository which can then be actioned by one of the site moderators.  

**If you try to publish the Practice yourself, you will see an error as it needs to be curated by a moderator.**

You will receive emails once the content has been actioned.

These actions could be to add/change or content if everything is good, you will receive and email saying that the content has been merged (accepted in to the library).

### Editing Content

You can use the first steps in the above workflow to edit content.  Select the practice you wish edit.  Don't forget to update the date and click "Save" once you have edited the content.  

An email will be sent to the moderators who will approve the change.

## Publishing Content (Moderators)

As a moderator, you will receive and email to say that new content has been added.

### Steps to fix

* Go to the [Pull Request Page](https://github.com/openpracticelibrary/openpracticelibrary/pulls) and click on the relevant pull request or follow the link in the email.  
* To see what has been added / changed, go to the "Files changed" tab.
* If you require more information or would like changed to be made, write the comment in the "Leave a Comment" box.  

  *Note: Add @username in the comment so the originator receives the email.  The originators user name can be found in the "Commits" tab.*
* If you are happy with the content and there are no conflicts, click the "Merge pull Request" button followed by the "Confirm Merge" button.  Add some additional comments if required.
* Once merged, delete the branch (this will hopefully be automated at some point) as there is an issue with the CMS that does not allow people to create further edits while it still exists. **Click the "Delete Branch" button on the PR's page.**
* This act will deploy the changes to the `staging` environment. To deploy the change to the main site, raise a PR from `staging` to `main`. On GitHub, navigate to the `staging` branch which should be ahead of `main` and hit raise PR. Merge the change set as you did before.
* If you go back to the [List of Practices](/admin/#/collections/practices) you should see the newly added practice.
