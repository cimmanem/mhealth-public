jQuery(document).ready(function ($) {

$("#blog-content").rss("http://pennlabs.blogspot.com/feeds/posts/default", {
    limit: 5,
    layoutTemplate: '<div>{entries}</div>',
    entryTemplate: '<h3>{title}</h3><h4>{date} by {author}</h4>{body}'
}).show();


}
)