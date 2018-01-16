# BeachTimeAuctions.com

This web application was created for a client who needed a web application to manage real life auctions. They were not satisfied with solutions on the market and desired to have a custom solution built for them.

The app was built with a LAMP stack from the ground up with a custom, rudimentary PHP framework. The software has many sets of functionality, including both a "Staff" and a "Patron" view.

For the many forms in this application, a custom framework was created that handles input validation, template based generation, and dynamic supplemental input field generation. An additional "framework" for forms was created which enables simple navigation and fast submission in an arbitrary form size.

The high-speed demands of a live auction made it critical to implement an asynchronous data recording system which would eliminate any latency in submitting auction purchases and would handle any possible Internet connection problems: javascript webworkers were utilized to constantly poll the server with updated submission data and to verify that the server successful recorded each submission. Additional backup functionality was created which enables the user to "download" the current submission queue in the case that an unknown reason is preventing submission (e.g., internet is down, computer has problems, etc). The user interface for this functionality is visible in an image later on this page.

![web_preview][login]

The patron view allows a customer of the auction platform to signin and view their past purchases, along with receipts, and current purchases in real time. Upon registering with the staff and receiving an auction id to use throughout the live auction bidding, the customer is sent an email or a text message offering them the ability to set a password to access this functionality.

![web_preview][patron_login]

As we would expect, the staff have a much greater array of functionality:

![web_preview][dashboard]

The registration functionality enables the staff to register new customers and generate an Auction ID which they can reuse whenever they return. It handles recording basic information, license information, and tax identifier numbers. Tax identifier numbers are later referenced in checkout to determine whether or not the customer should be charged sales tax. The input framework mentioned earlier is critical in a form of this large size for maintainability.

![web_preview][register]

The heart of the software, the functionality which enables recording the auction purchases in real time is displayed below. This functionality enables recording the final bid price of an item, recording that a particular customer purchased it, and enabling supplemental buyers to purchase the item at the same price. For convenience, the functionality also enables the clerk (the person recording the auction purchases) to keep track of how many units are still available throughout the supplemental buyer purchase process. The form navigation framework is critical here as it enables fast, keyboard based, submission and navigation throughout the form.

![web_preview][record]

Most importantly, however, is the ability of this software to operate even if it experiences unforeseen problems such as the Internet not working, interrupted submissions, and etc.

As mentioned before, there is a javascript worker that polls the server to make sure each submission entry is successfuly recorded on the server, which handles submissions which are interrupted or one time run errors: untill the server responds that an entry is submitted, the worker will keep requesting that the server records it.

For cases such as internet errors and other unforseen errors which do not enable the javascript worker to submit the entries, the user is visibly notified that an error has occured and is offered the option to retry (worker stops automatically retrying after 5 attempts) or to download the cache manually (which can be used to submit it on another system).

It is important to note that while an error has occured, more information can still be recorded and the auction can go on: the new information will simply be added to the cache.

![web_preview][record_error_1]

An example of the system operating with slow internet is displayed below:

![web_preview][slow_gif]

The checkout functionality is demonstrated below:

![web_preview][checkout]





[login]: /_material/entres/BeachTimeAuctions/login.png
[patron_login]: /_material/entres/BeachTimeAuctions/patron_login.png
[dashboard]: /_material/entres/BeachTimeAuctions/dashboard.png
[register]: /_material/entres/BeachTimeAuctions/register.png
[record]: /_material/entres/BeachTimeAuctions/record.png
[record_error_1]: /_material/entres/BeachTimeAuctions/record_error_1.png
[slow_gif]: /_material/entres/BeachTimeAuctions/slow_gif.gif
[checkout]: /_material/entres/BeachTimeAuctions/checkout.png
