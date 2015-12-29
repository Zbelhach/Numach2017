# workshop_website

HTML static page to create (fastly) a website for a workshop.
The aim is not to use server side code (php, asp, ...) and thus rely
heavily on google applications (in particular google form,
google calendar and google map).

# Tree

File|   Description
--- | ---
index.html | main html file.
index_fr.html | french translation, a copy of index translated.
.htaccess | Redirect to good language depending on IP, default EN.


# Install

Just copy all files in the webserver public (default often "~/public_html/") directory. 
You might have to update the `.htaccess` file to redirect to the good language translation.

Note that you can publish directly in [Github Page](https://pages.github.com/).

1. Fork this repository
2. Edit to create your content
3. create a `gh-pages` branch (note that the .htaccess won't work)
4. Update the gh-pages branch to update automatically your website

Here's the example for this repository:
http://gdolle.github.io/workshop_website
