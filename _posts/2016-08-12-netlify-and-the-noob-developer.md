---
layout: post_mw
layoutTag: post
title: "Netlify and the Noob Developer"
subtitle: "How I set up this site and deployed it with Netlify; so simple, even I figured it out!"
author: Rich Cook
bio: publisher and noob web dev at www.TalesofMurder.com
date: 2016-08-12
category: murderwiki
genre: about
wordcount: 1260
---

{:.first.bold}
With words or phrases like command line, git, versioning, static site, continuous development, Grunt, Gulp, SSL/HTTPS, redirects, basic auth, OAuth and so many others, web development for the non-developer is intimidating at best. The simple fact is, with so many new and growing technologies, web development is simply more than a little HTML and CSS.

In 2013, I began development of a website for my little publishing business, Tales of Murder Press. I started with WordPress but quickly (and thanks to Josh Kaufman&#39;s book _The First 20 Hours_) discovered Jekyll and the wonders of static website development. That, of course, drew me down a rabbit hole of technology that required more and more books and web tutorials to learn.

Then I hit a wall. How to serve my beautiful (yes, I&#39;m biased, and no, its not really!) Jekyll creation so that the world would beat a path to my virtual door and buy my books? I&#39;m a writer, not a web developer. I know basic HTML and CSS. I can copy JavaScript but can&#39;t write my own. Add in the numerous JS variation and libraries and I&#39;m lost.

Finally, after reading I-don&#39;t-know-how-many blogs, articles and books, I saw a little post about integrating Jekyll with a neat system called Netlify. Besides the nifty name, the concept of simple, straightforward hosting and deployment of my site caught my attention. Soon, I was knee-deep in the article and reading everything I could find in their extensive (albeit sometimes over my head) documentation.

And then suddenly, there it was. My little site, pushed from my simple \_site folder on my Mac to the live web. It had a funny domain name (something like governor-cow-some.random.number). But it was live and so simple.

## For the Noob Web Developer

So, if you&#39;re a noob web developer like me but steeped in the idea of best-practice, cutting-edge web dev technology, you won&#39;t go wrong with Netlify. It&#39;s just too easy to get started and as you grow in your knowledge of web dev tech and fully grok all those weird terms I mentioned at the top of this article, you&#39;ll find the depths of Netlify are more than enough to satisfy your every need.

Let me walk you through how I set myself up with Netlify and, if you follow my steps, read the excellent documentation on the site (just Google anything you don&#39;t understand or ask them for help…their tech support has been more than generous with helping me with some very dumb questions), you&#39;ll look up after just a few minutes and find your static site blasted out across the World Wide Web, ready for masses of visitors.

## Step 1

My favorite aspect of Netlify, at least in the beginning since I&#39;ve now upgraded, is the free level of their service. You don&#39;t even have to pay to play! Just create an account and you&#39;re ready to go.

## Step 2

Navigate to SITES (you&#39;ll see it at the top of the Netlify page once you&#39;ve logged in). There you&#39;ll see a nifty box with a big ole plus sign in it and &quot;NEW SITE&quot;. Just click that and you&#39;re off to the races.

It&#39;ll ask you if you&#39;d like to do Continuous Deployment and that is a fantastic feature if you&#39;re set up in GitHub, GitLab, or Bitbucket. For now, just look to the right-hand side of the screen to the big box that says &quot;Or Do a Quick Manual Deploy&quot;.

## Step 3

This is where it gets stupid simple. Go to your Finder on your computer. Find your generated \_site folder or wherever your particular brand of static site generator outputs the fully generated HTML, CSS, JS, etc.

Do the old click-to-select-and-drag that fold (the \_site or whatever) from your Finder window to the Manuel Deploy box. Release the mouse button and then watch the magic happen.

Netlify works behind the scenes to examine your site files and determine if there are any issues with them. If not, it creates a new site on Netlify with some goofy name like upholster-alice or monkey-canisters, or whatev (really a fun part, I think).

## Step 4

Click on that box and you&#39;ll see a large thumbnail type image of your main page along with the name (the goofy one), domain (probably says, &quot;No custom domain&quot; and the Privacy settings. Below that are links to your Git repo, if you&#39;ve set it up for Continuous Deploy and other more advanced options (that I don&#39;t, as yet, use).

You&#39;ll notice a submenu just above all this information with: Settings (this page), Builds, Forms, Access, Notifications, HTTPS, and Upgrade menu options. Click on the Builds item and you&#39;ll find details on the build of you site (what happened when you dragged your folder onto the Manual Deploy spot).

Here, you&#39;ll find all builds and deploy history for this site. Each row has a tiny thumbnail and a Preview link (click this to see the actual live site), Build (whether manual or continuous) and the State (published or in my case at first, an error). If you do see an error, it usually means something is wrong with your static site build and you just need to follow the info provided to sort out any issues. And again, Netlify&#39;s tech support is great in helping a noob sort out the obvious!

## Step 5

Again, click the Preview link and a new tab in your browser opens, displaying your work of art. Share this link with the world and your work is done.

## (Optional) Step 6+

Or not. You can easily point the goofily-named Netlify build/deploy to a custom domain, like www.MyAwesomelyFantasticWebsiteTheWorldHasToSee.com. Go back to the Settings submenu item and click Edit next to the &quot;Domain: No custom domain&quot;. Fill in the URL you wish to use (be sure to follow their documentation details to set your DNS records properly … this was an area I messed up and AGAIN their tech support, or more accurately one of the founders, sorted me out).

Once that&#39;s set, hit SAVE and very quickly, your beautiful creation will be live at your custom URL. So simple, that even I managed to sort it out and am proud to see my site live.

## Updating your Netlify deployed site

And updates? Just as simple. Just drag the newly output \_site folder onto the big thumbnail image on the Settings page and it&#39;ll rebuild and redeploy your changes. Nothing could be simpler.

That&#39;s it. If you&#39;re a noob like me and just learning about all the wonders and weirdness of web dev, do yourself a favor and tap into Netlify&#39;s goodness and simplicity. Easier than the so-called 5 Minute you-know-who set up.

## It gets more (but not much) complex from here!

One last thing, if you are interested in the more complex matters like SSL/HTTPS (now provided as part of any package) or Continuous Deploy from a Git repo, the documentation is extensive and helpful. I&#39;ve only dabbled in these areas but was quickly able to add Command Line deploy and connect my GitHub repo to my Netlify deploy. I also took advantage of the free SSL/HTTPS options (so cool!).

There are many more depths to plumb within Netlify and they continue to add new and more robust features (like JAMstack, which I&#39;m just beginning to wrap my head around) to their already bursting collection of features for static website deployment. It&#39;ll only get better.

For noobs and masters of the web dev environment alike, Netlify provides the technology, security, speed and simplicity to get you on the web faster and better.

{:.bold}
So drag yourself and your _site folder to [Netlify](https://www.netlify.com/) and get deployed, easy-peasy. Hey, if I can figure it out, so can you.

<h6 class="btt"><a href="#top">Back to Top</a></h6>