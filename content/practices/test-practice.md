---
title: Test Practice
date: '2018-07-20T14:40:42+01:00'
---
This is a test practice:

When you transfer a repository, its issues, wiki, stars, and watchers are also transferred. In addition:

If the transferred repository is a fork, then it remains associated with the upstream repository.

If the transferred repository contains a GitHub Pages site, then links to the Git repository on the Web and through Git activity are redirected. However, we don't redirect GitHub Pages associated with the repository.

If the transferred repository contains webhooks, services, or deploy keys, they will remain associated after the transfer is complete.

If the transferred repository has any forks, then those forks will remain associated with the repository after the transfer is complete.

If the transferred repository uses Git Large File Storage, all Git LFS objects are automatically moved. This transfer occurs in the background so if you have a large number of Git LFS objects or if the Git LFS objects themselves are large, it may take some time for the transfer to occur. Before you transfer a repository that uses Git LFS, make sure the receiving account has enough data packs to store the Git LFS objects you'll be moving over. For more information on adding storage for personal accounts, see "Purchasing additional storage and bandwidth for a personal account."

All Git information about commits, including contributions, are preserved.

All of the issues and pull requests remain intact when transferring a repository.

All links to the previous repository location are automatically redirected to the new location. When you use git clone, git fetch, or git push on a transferred repository, these commands will redirect to the new repository location or URL. However, to avoid confusion, we strongly recommend updating any existing local clones to point to the new repository URL. You can do this by using git remote on the command line:

![redhahahat](/images/redhahahat.jpg)
