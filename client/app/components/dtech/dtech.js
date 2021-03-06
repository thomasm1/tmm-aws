'use strict';
var dTech = angular.module("dTech", [  "ngAnimate" ]); 
 

dTech.factory("postService", function() {
	var post = [];
	 

	console.log(post);
	return {
		getPost: function() {
			return post;
		},
		addToPost: function(book) {
			post.push(book);
			console.log(book)
		},
		add: function(book) {
			console.log("Thanks for reading: " + book.title);
		}
	} 
});

dTech.factory("bookService", function() {
	var books = 
	[{
		"id": "10",
		"did": "10-11-18",
		"date": "October 11, 2018",
		"author": "by Thomas Maestas",
		"cat3": "Sociology Tomorrow!",
		"title": "Economic Prosperity, Democracy, and the Technology that Binds The Two",
		"post": "\n<p class=\"firstparagraph\">Climate-change scientist-activists earn their prestige with every research study and every letter written. With less fanfare, economists also earn their due prestige for working toward a sustainable prosperity.     </p>\n<p class=\"quote\"> This year’s [Nobel Prize] Laureates William Nordhaus and Paul Romer have significantly broadened the scope of economic analysis by constructing  models that explain how the market economy interacts with nature and knowledge. <br /><br />\n Romer demonstrates how knowledge can function as a driver of long-term economic \ngrowth. When annual economic growth of a few per cent accumulates over decades, it transforms people’s lives. \nPrevious macroeconomic research had emphasised technological innovation as the primary driver of economic \ngrowth, but had not modelled how economic decisions and market conditions determine the creation of new \ntechnologies. Paul Romer solved this problem by demonstrating how economic forces govern the willingness of \nfirms to produce new ideas and innovations. \n<sup>1</sup></p>\n<p>The economist in turn practices what he preaches by using only open-source software--to the aim of democratizing research itself:</p>\n<p class=\"quote\">Romer believes in making research transparent. He argues that openness and clarity about methodology is important for scientific research to gain trust. As Romer explained in an April 2018 blog post, in an effort to make his own work transparent, he tried to use Mathematica to share one of his studies in a way that anyone could explore every detail of his data and methods. It didn’t work. He says that Mathematica’s owner, Wolfram Research, made it too difficult to share his work in a way that didn’t require other people to use the proprietary software, too. Readers also could not see all of the code he used for his equations.\n<br /><br />\nInstead of using Mathematica, Romer discovered that he could use a Jupyter notebook for sharing his research. Jupyter notebooks are web applications that allow programmers and researchers to share documents that include code, charts, equations, and data. Jupyter notebooks allow for code written in dozens of programming languages. For his research, Romer used Python—the most popular language for data science and statistics.<sup>2</sup>\n</p>\n<p>The Bottom line is that yesterday's ink and paper is today's software and hardware--essential tools for success, the earlier the better. So, because historical suppression usually begins financially, equal access across social and economic lines.  So, the economic incentive to outfit every last citizen with free wifi and open-source technology. Already, the best in humanity--the Nobel winners--know the public incentive to harness the power of a widespread tech education. Because when the many and not the few create and advance technology, the economy blooms with real productivity.</p>\n  ",
		"blogcite": " \n<p class=\"cite\"> 1 <a href=\"https://www.nobelprize.org/uploads/2018/10/press-economicsciences2018.pdf\"   target=\"_blank\">https://www.nobelprize.org/uploads/2018/10/press-economicsciences2018.pdf \n</a>\n</p>  \n<p class=\"cite\"> 2 <a href=\"https://qz.com/1416867/the-2018-nobel-prize-in-economics-goes-to-william-nordhaus-and-paul-romer/\"   target=\"_blank\">https://qz.com/1416867/the-2018-nobel-prize-in-economics-goes-to-william-nordhaus-and-paul-romer/\n</a>\n</p>  \n   "
	}, {
		"id": "9",
		"did": "10-10-18",
		"date": "October 10, 2018",
		"author": "by Thomas Maestas",
		"cat3": "Musing Blockchain",
		"title": "Blockchain's Quiet Success",
		"post": "\n  <p class=\"firstparagraph\">Hackernoon featured Jack Dossman's take on the banality of blockchain technology outside of special-use cases. Dossman opines, \"Unless your business needs all of the benefits that a blockchain provides, you will be no better off storing your data on one.\" </p>\n  <p class=\"quote\">By definition, there is no central authority governing a public blockchain, so who makes decisions in this distributed company?\n\n  What about dispute resolution? Once data has been uploaded and verified, it’s not going anywhere. Got charged for a ride you didn’t take? Driver did something really bad that you need to report? Well too bad because nobody is listening. <sup>1</sup></p>\n <p>Now, this article grossly underestimates the range of designs from  private blockchains to consortium blockchains, but the point about hype is well-made!</p>\n    ",
		"blogcite": " \n  <p class=\"cite\"> 1 <a href=\"https://hackernoon.com/10-things-blockchain-isnt-dcb7966d22e5\"   target=\"_blank\">https://hackernoon.com/10-things-blockchain-isnt-dcb7966d22e5 \n  </a>\n  </p>  \n     "
	}, {
		"id": "8",
		"did": "10-09-18",
		"date": "October 9, 2018",
		"author": "by Thomas Maestas",
		"cat3": "Sociology Tomorrow!",
		"title": "Intellectual Espionage: <br />Part II: When Does Fair Play for All Warrant a Foul to One?",
		"post": "\n  <p class=\"firstparagraph\">Intellectual espionage is about as newsworthy as any other misguided nationalist practice across the globe from nearly every nation--in some form. Maybe its the ubiquity of mimicry that events are quickly forgotten. An <i>other-world problem</i>. Yet, this is not merely a regionally-based nuisance. From time immemorial, headlines have raised the prospect of academic, university-based intellectual theft. Related events raised eyebrows and then quickly forgotten. <p>This year, Chinese-made servers discovered with a microscopic, embedded chip may have been known by Apple three years ago. Last week, Bloombergs reported, </p>\n  <p class=\"quote\"> Beijing's military intelligence pressured or bribed a Chinese manufacturing subcontractor of US-based Super Micro to include a small secret spy chip in the server maker's motherboards. The supposedly grain-of-rice-sized chips were inserted to give China a backdoor into the computers, allowing data to be silently altered or stolen from afar by the Chinese government. <br />\n  <br />Of the 30 or so organizations that apparently received these bugged machines, ranging from a major bank to US government contractors, were Apple and Amazon, according to Bloomberg's sources. <sup>1</sup></p>\n  <p>Mischief in all forms pervades nearly every nations' agenda  ... Again, apparently, who remembers a week afterward?</p> \n    ",
		"blogcite": " \n  <p class=\"cite\"> 1 <a href=\"https://www.theregister.co.uk/2018/10/08/super_micro_us_uk_intelligence/\"   target=\"_blank\">https://www.theregister.co.uk/2018/10/08/super_micro_us_uk_intelligence/ \n  </a>\n  </p> <p class=\"cite\"> 2 <a href=\"https://www.cnbc.com/2018/10/04/us-warns-companies-about-security-risk-to-managed-service-providers.html\"   target=\"_blank\">https://www.cnbc.com/2018/10/04/us-warns-companies-about-security-risk-to-managed-service-providers.html\n  </a>\n  </p>  <p class=\"cite\">3\n  <a href=\"https://www.bloomberg.com/news/articles/2018-09-04/what-a-mooted-chinese-wireless-mega-merger-means-for-the-5g-race\"   target=\"_blank\">https://www.bloomberg.com/news/articles/2018-09-04/what-a-mooted-chinese-wireless-mega-merger-means-for-the-5g-race\n  </a>\n  </p>\n     "
	}, {
		"id": "7",
		"did": "10-08-18",
		"date": "October 8, 2018",
		"author": "by Thomas Maestas",
		"cat3": "Web Dev Affairs",
		"title": "Intellectual Espionage, Part I:<br />Small Chips",
		"post": "\n  <p class=\"firstparagraph\"> The latest news of microscopic foreign chips embedded in Micro Systems chips for hard drives that find their way into Amazon, Pentagon, and other servers in between now raise a new awareness</p>\n  <p class=\"quote\">\n The spy chip could have been placed electrically between the baseboard management controller (BMC) and its SPI flash or serial EEPROM storage containing the BMC's firmware. Thus, when the BMC fetched and executed its code from this memory, the spy chip would intercept the signals and modify the bitstream to inject malicious code into the BMC processor, allowing its masters to control the BMC.\n  <sup>1</sup></p> \n  <p> </p>\n  <p class=\"quote\">The spy chip could have been placed electrically between the baseboard management controller (BMC) and its SPI flash or serial EEPROM storage containing the BMC's firmware. Thus, when the BMC fetched and executed its code from this memory, the spy chip would intercept the signals and modify the bitstream to inject malicious code into the BMC processor, allowing its masters to control the BMC.<sup>3</sup></p>\n  <p>In sum, the <i>the times, they are - a - changing</i> and that means, like any test-taker knows, cheatsheets do more damage if they fall irrelevent, even slightly deprecated.  </p> \n    ",
		"blogcite": "\n  <p class=\"cite\"> 1 <a href=\"https://www.theregister.co.uk/2018/10/08/super_micro_us_uk_intelligence/\"   target=\"_blank\">https://www.theregister.co.uk/2018/10/08/super_micro_us_uk_intelligence/ \n  </a>\n  </p> \n  <p class=\"cite\">2\n  <a href=\"https://www.forbes.com/sites/kalevleetaru/2018/10/04/the-chinese-spy-chip-story-is-a-reminder-of-how-insecure-our-digital-world-really-is/#1736f0f07e13\"   target=\"_blank\">https://www.forbes.com/sites/kalevleetaru/2018/10/04/the-chinese-spy-chip-story-is-a-reminder-of-how-insecure-our-digital-world-really-is/#1736f0f07e13\n  </a>\n  </p> \n  <p class=\"cite\">3\n  <a href=\"https://www.bloomberg.com/news/articles/2018-09-04/what-a-mooted-chinese-wireless-mega-merger-means-for-the-5g-race\"   target=\"_blank\">https://www.bloomberg.com/news/articles/2018-09-04/what-a-mooted-chinese-wireless-mega-merger-means-for-the-5g-race\n  </a>\n  </p>\n     "
	}, {
		"id": "6",
		"did": "10-06-18",
		"date": "October 6-7<br />Weekend, 2018",
		"author": "by Thomas Maestas",
		"cat3": "Musing Blockchain",
		"title": "Humane Technology: Is there a Goal Post?<br />Part III: Resisting Compartmentalization",
		"post": "\n  <p class=\"firstparagraph\">Last month's <i>Techcrunch Disrupt!</i> revealed if only a few imminent blockchain trends to pay attention to: The crypto-currency and investment is definitely tamped down, and now the field of play is no longer between competing platforms, but rather the DAPPS are now the players on the established platforms--starting with Ethereum crypto-contracts, browser-based platforms like Mist and other players. <i>The trust and direction is no longer in dispute--now, the question asks: Who can leverage ease-of-use and accessibility and  utility via the web browser ... After all, isn't the point of tech advancents, to bring about new possibilities, and  the time to explore them by also providing efficient living! </p>\n   \n    ",
		"blogcite": "  \n     "
	}, {
		"id": "5",
		"did": "10-05-18",
		"date": "October 5, 2018",
		"author": "by Thomas Maestas",
		"cat3": "Sociology Tomorrow!",
		"title": "Humane Technology: Is there a Goal Post?<br />Part II: Tech-based Social Capital",
		"post": "\n  <p class=\"firstparagraph\">Trust, trust layers, and institutions of Trustworthiness: The quaint, <i>Leave-it-to-Beaver terms of a by-gone world</i> haven't weakened but are transformed: What was once a rigid hierarchy of trust proclamations from above are now flexible, continually-earned, community-based trust networks. Slowly but surely,<i>Community-centered networks made of social capital overtake institutional, bureaucratic capital and credentialism. </i></p><p class=\"quote\">This is the whole issue. This is everything that we're talking about. And how do you trust something that can pull these signals off of you? <br /><br />If a system is asymmetric—if you know more about me than I know about myself, we usually have a name for that in law. So, for example, when you deal with a lawyer, you hand over your very personal details to a lawyer so they can help you. But then they have this knowledge of the law and they know about your vulnerable information, so they could exploit you with that. Imagine a lawyer who took all of that personal information and sold it to somebody else. But they're governed by a different relationship, which is the fiduciary relationship. They can lose their license if they don't actually serve your interest. And similarly a doctor or a psychotherapist.\n  <sup>1</sup></p>\n  <p>Whether by coincidence or innate features of 21st century technology, trust-based platforms innately reward sharing, trust-based distribution of power. Consider the difference between the democratically operated blockchain, i.e. distributed ledgers without middle-persons, versus hierarchical, siloed centers of information. As usual, the problems that technology present in one form are symmetrically resolved by a technology of another form.",
		"blogcite": "\n  <p class=\"cite\">1 <a href=\"https://www.wired.com/story/artificial-intelligence-yuval-noah-harari-tristan-harris/\"   target=\"_blank\">\n  https://www.wired.com/story/artificial-intelligence-yuval-noah-harari-tristan-harris/</a>\n  </p> \n  <p class=\"cite\">2<a href=\"https://www.wired.com/story/our-minds-have-been-hijacked-by-our-phones-tristan-harris-wants-to-rescue-them/\"   target=\"_blank\">https://www.wired.com/story/our-minds-have-been-hijacked-by-our-phones-tristan-harris-wants-to-rescue-them/\n  </a>\n  </p>\n     "
	}, {
		"id": "4",
		"did": "10-04-18",
		"date": "October 4, 2018",
		"author": "by Thomas Maestas",
		"cat3": "A.I.Now.",
		"title": "Humane Technology: Is there a Goal Post?<br />Part I: Churches, Education, and Technologies",
		"post": "<p class=\"quote\"><i>But everywhere you turn on the internet there's basically a supercomputer pointing at your brain, playing chess against your mind, and it's going to win a lot more often than not.</i><sup>1</sup></p>\n  <p class=\"firstparagraph\">First off, what is Humane Technology? Besides a philosophy that dissipates, a practical philosophy only gains focus--far more valuable than depth or breadth. Much more than a real Des Cartes meets an iPhone, whose focus is on \"realigning technology with a clear-eyed model of human nature\".</p>\n  <p class=\"quote\">Because we have built our society, certainly liberal democracy with elections and the free market and so forth, on philosophical ideas from the 18th century which are simply incompatible not just with the scientific findings of the 21st century but above all with the technology we now have at our disposal.<br /><br />\n   Our society is built on the ideas that the voter knows best, that the customer is always right, that ultimate authority is, as Tristan said, is with the feelings of human beings and this assumes that human feelings and human choices are these sacred arena which cannot be hacked, which cannot be manipulated. Ultimately, my choices, my desires reflect my free will and nobody can access that or touch that. And this was never true. But we didn't pay a very high cost for believing in this myth in the 19th and 20th century because nobody had a technology to actually do it. Now, people—some people—corporations, governments are gaming the technology to hack human beings. Maybe the most important fact about living in the 21st century is that we are now hackable animals.<sup>2</sup></p> \n   <p>But this isn't some new thing. By adapting to the new touchstone, on a societal level, the technology bears no more threat than the novel television ad campaigns of the 1950's--Some viewers became brain-washed, but not all! So like Bebe Rexha teaches us: <i>No broken hearts in the club tonight, no tears in the club ... We only got one life so let's go hard until the day we die!\"</i></p>\n  ",
		"blogcite": "\n  <p class=\"cite\">https://www.wired.com/story/artificial-intelligence-yuval-noah-harari-tristan-harris/ <a href=\"https://www.wired.com/story/artificial-intelligence-yuval-noah-harari-tristan-harris/ \"   target=\"_blank\">\n  </a>\n  </p> \n  <p class=\"cite\">https://www.wired.com/story/our-minds-have-been-hijacked-by-our-phones-tristan-harris-wants-to-rescue-them/<a href=\"https://www.wired.com/story/our-minds-have-been-hijacked-by-our-phones-tristan-harris-wants-to-rescue-them/\"   target=\"_blank\">\n  </a>\n  </p>\n  "
	}, {
		"id": "3",
		"did": "10-03-18",
		"date": "October 3, 2018",
		"author": "by Thomas Maestas",
		"cat3": "Web Dev Affairs",
		"title": "Fast Cars and Faster Info",
		"post": "<p class=\"firstparagraph\">\n  There was a time for Seinfeldian Coffee in Cars, when the company makes for the ride.  Today, the ride makes for the company, albeit by real-time Skype and real-time info-tainment. So if you have an extra $60,000 laying around, here's the future--this one by BMW ...</p>\n  <p class=\"quote\">There's also a new reconfigurable digital gauge cluster that BMW calls Live Cockpit, and an impressively huge and crisp optional head-up display to relay even more information ... Being faced with all of those screens and all of those choices at once probably sounds daunting, but in my brief experience with iDrive 7, it all felt quite intuitive. The system smartly allows for the driver to use their preferred interface method, be that via touchscreen, steering wheel switchgear, cloud-based speech recognition or even gesture control. (A word about the latter: It's still overwhelmingly gimmicky. Twirling your finger in the air to turn up the stereo remains a crowd-pleasing novelty, but little more). <sup>1</sup></p>\n  <p></p>",
		"blogcite": "  <p class=\"cite\">1\n  <a href=\"https://www.cnet.com/roadshow/reviews/2019-bmw-x5-preview/\"   target=\"_blank\">https://www.cnet.com/roadshow/reviews/2019-bmw-x5-preview/\n  </a>\n  </p>\n  "
	}, {
		"id": "2",
		"did": "10-02-18",
		"date": "October 2, 2018",
		"author": "by Thomas Maestas",
		"cat3": "Web Dev Affairs",
		"title": "Fast 5G: Part II<br />The How and When",
		"post": "<p class=\"quote\"><i>The wireless standard known as 4G has untethered us from our living rooms and offices, allowing us to navigate unfamiliar roads and streets using voice directions from Google Maps, stream movies on Netflix while commuting to work, and interview a prospective hire on FaceTime during a flight layover. The next iteration promises to be even more transformative, because it will support communication among objects, as well as people.  \n  </i><sup>1 </sup></p>\n  <p class=\"firstparagraph\"> </p>\n  <img src=\"dist/img/5g4g.jpg\" class=\"zoom\" />\n  <p class=\"quote\">\n  First, providers need a final set of technology standards. The global body setting them, the 3rd Generation Partnership Project, released the first 5G specifications in June; the next set of standards is due in 2020. (The 3GPP, a collaboration between seven telecommunications organizations, also set standards for 3G and 4G LTE mobile systems.) 5G mobile tests also need special handsets, transmission hardware and software and a system design that doesn’t interfere with 4G and 3G networks. And governments need to set aside mobile spectrum space for 5G.</p>\n    ",
		"blogcite": "\n  <p class=\"cite\">  <a href=\"https://www.bloomberg.com/news/articles/2017-02-16/tomorrow-s-cellular-networks-will-generate-3-5-trillion-in-economic-output\"   target=\"_blank\">https://www.bloomberg.com/news/articles/2017-02-16/tomorrow-s-cellular-networks-will-generate-3-5-trillion-in-economic-output\n  </a>\n  </p>\n    <p class=\"cite\">  <a href=\"https://www.bloomberg.com/news/articles/2018-09-17/when-will-ultrafast-internet-come-to-your-phone-quicktake\"   target=\"_blank\">https://www.bloomberg.com/news/articles/2018-09-17/when-will-ultrafast-internet-come-to-your-phone-quicktake\n  </a>\n  </p>\n    "
	}, {
		"id": "1",
		"did": "10-01-18",
		"date": "October 1, 2018",
		"author": "by Thomas Maestas",
		"cat3": "Web Dev Affairs",
		"title": "Fast 5G: Part I<br />The Why and What",
		"post": "<p class=\"quote\"><i>It's the next (fifth) generation of cellular technology which promises to greatly enhance the speed, coverage and responsiveness of wireless networks. How fast are we talking about? Think 10 to 100 times speedier than your typical cellular connection, and even faster than anything you can get with a physical fiber-optic cable going into your house.  \n  </i><sup>1 </sup></p>\n  <p class=\"firstparagraph\">5G builds anticipation for the imminent tech revolution, but who's paying attention? What's the point besides incomparable speed? It's not speed, which is a sequential, yesterday term; Zero latency means everything all at once, coming and going: <i>Latency is the primary element that really ushers in the new age, where online, internet connection escapes from home and office nodes into the very links in between!</i>S That seems inconvenient and fleeting but really, shouldn't the web follow us in action, rather than chain us down? Consider the world of instantanous request-responses ....</p>\n  <p class=\"quote\">\n  Latency is the response time between when you click on a link or start streaming a video on your phone, sending the request up to the network, and when the network responds and gives you your website or starts playing your video. \nThat lag time can last around 20 milliseconds with current networks. It doesn't seem like much, but with 5G, that latency gets reduced to 1 millisecond, or about the time it takes for a flash in a normal camera to finish.  \nThat responsiveness is critical for things like playing an intense video game in virtual reality or for a surgeon in New York to control a pair of robotic arms performing a procedure in San Francisco.</p><p>\nComcast yesterday and T-Mobile Tomorrow or not, the implications of a truly mobile internet couldn't be underestimated. What used to be a sensor is tomorrow's controller, and today's controllers become sensors, because source and target become irrelevant concepts when latency folds uni-directional wait-time into bi-directional concurrent communication. </p><p>Perhaps the central player in this revolution is the fast-developing internet-of-things infrastructure in full development--with a moving target ...</p>    ",
		"blogcite": "\n  <p class=\"cite\">  <a href=\"https://www.cnet.com/how-to/the-5g-revolution-is-coming-heres-everything-you-need-to-know/\"   target=\"_blank\">https://www.cnet.com/how-to/the-5g-revolution-is-coming-heres-everything-you-need-to-know/\n  </a>\n  </p>\n    "
	}, {
		"id": "0",
		"did": "9-28-18",
		"date": "September 28th, 2018",
		"author": "by Thomas Maestas",
		"cat3": "Web Dev Affairs",
		"title": "Open Source Democracy: Part II <br />Data Visualization for All",
		"post": " \n    <p class=\"firstparagraph\">Democracy, i.e., power of the people, is often expressed in the tools and resources available to everyone. Data visualization software is prohibitively expensive, and complicated, limiting access to universities and commerce. So, many important data stories are relegated to Excel bar charts. These days, the preeminent medium for graphical representation of data is free to all: <i><strong>Pandas</strong>, short for the  Econometrics term 'Panel Data', that features paragraphs of statistical, programming language with spoken language, coupled with powerful data visualization:  </i> </p>\n      <p class=\"quote\">\n      Millions of people around the world use Pandas. In October 2017 alone, Stack Overflow, a website for programmers, recorded 5 million visits to questions about Pandas from more than 1 million unique visitors. Data scientists at Google, Facebook, JP Morgan, and virtually every other major company that analyze data uses Pandas. Most people haven’t heard of it, but for many people who do heavy data analysis—a rapidly growing group these days—life wouldn’t be the same without it. (Pandas is open source, so it’s free to use.)  <br /><br />Basically, Pandas makes it so that data analysis tasks that would have taken 50 complex lines of code in the past now only take 5 simple lines, because  [Pandas creator] McKinney already did the heavy lifting.  \n      <sup>1</sup></p>\n<p>      Data expression, at the end of the day, and across the land, is now an expression for all!</p>\n      \n      ",
		"blogcite": "\n    <p class=\"cite\"> 1 <a href=\"https://qz.com/1126615/the-story-of-the-most-important-tool-in-data-science/\"   target=\"_blank\">https://qz.com/1126615/the-story-of-the-most-important-tool-in-data-science/\n    </a>\n    </p>\n    "
	}, {
		"id": "99",
		"did": "9-27-18",
		"date": "September 27th, 2018",
		"author": "by Thomas Maestas",
		"cat3": "Web Dev Affairs",
		"title": "Open Source Democracy: Part I <br />The Primacy of the Jupyter Notebook",
		"post": " \n    <p class=\"firstparagraph\">The College Term-Paper, the perennial object of dread or elation, of tedium or excitement. Yet, more and more, the needs for communication require the inclusion of programming, analytic language. Paragraphs of eloquently written code with paragraphs of synopsis, from one logical statement to the next, laying out the proofs with each paragraph. Best yet, it is innately online and presentable, and employs the powerful languages like Python and R. But how to communicate these specialized papers to a wide audience?</p>\n      <p class=\"quote\"> \n      The more sophisticated science becomes, the harder it is to communicate results. Papers today are longer than ever and full of jargon and symbols. They depend on chains of computer programs that generate data, and clean up data, and plot data, and run statistical models on data. These programs tend to be both so sloppily written and so central to the results that it’s contributed to a replication crisis, or put another way, a failure of the paper to perform its most basic task: to report what you’ve actually discovered, clearly enough that someone else can discover it for themselves.<br /><br />\n      Perhaps the paper itself is to blame. Scientific methods evolve now at the speed of software; the skill most in demand among physicists, biologists, chemists, geologists, even anthropologists and research psychologists, is facility with programming languages and “data science” packages. And yet the basic means of communicating scientific results hasn’t changed for 400 years. Papers may be posted online, but they’re still text and pictures on a page.<sup>1</sup></p>\n      <p>Anaconda, the programming package bundle features math software with Spyder applications, yet the Jupyter notebook is already revolutionizing academic publications...",
		"blogcite": " \n    <p class=\"cite\"> 1 <a href=\"\n    https://www.theatlantic.com/science/archive/2018/04/the-scientific-paper-is-obsolete/556676/\"   target=\"_blank\">\n    https://www.theatlantic.com/science/archive/2018/04/the-scientific-paper-is-obsolete/556676/ \n    </a>\n    </p>  \n    <p class=\"cite\"> 2 <a href=\"https://qz.com/1416867/the-2018-nobel-prize-in-economics-goes-to-william-nordhaus-and-paul-romer/\"   target=\"_blank\">https://qz.com/1416867/the-2018-nobel-prize-in-economics-goes-to-william-nordhaus-and-paul-romer/\n    </a>\n    </p>  \n       "
	}];
	return {
		getBooks: function() {
			console.log("getBooks");
			return books;
		},
		addToPost: function(book) {
			console.log("addToPost");
		}
	}
});
   
dTech.controller('TodoListController', function() {
	var todoList = this;
	todoList.todos = [
		{text:'Post One', done:true},
		{text:'Post Two', done:false}];

	todoList.addTodo = function() {
		todoList.todos.push({text:todoList.todoText, done:false});
		todoList.todoText = '';
	};

	todoList.remaining = function() {
		var count = 0;
		angular.forEach(todoList.todos, function(todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	};

	todoList.archive = function() {
		var oldTodos = todoList.todos;
		todoList.todos = [];
		angular.forEach(oldTodos, function(todo) {
			if (!todo.done) todoList.todos.push(todo);
		});
	};
});

dTech.controller("PostListCtrl", function($scope, postService) {
	$scope.post = postService.getPost();
	
	$scope.add = function(book) {
		//console.log("book: ", book);
		postService.add(book);
	}
});

dTech.controller("HeaderCtrl", function($scope, $location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "Daily Tech Post";
	$scope.appDetails.tagline = "Tech News Overview";
	
	$scope.nav = {};
	$scope.nav.isActive = function(path) {
		if (path === $location.path()) {
			return true;
		}
		
		return false;
	}
});

dTech.controller("BookListCtrl", function($scope, bookService, postService) {

	$scope.add = function(book) {
		//console.log("book: ", book);
		postService.add(book);
	}
	$scope.books = bookService.getBooks(); 
	$scope.orderProp = 'did'; 
	$scope.addToPost = function(book) {
		postService.addToPost(book);
	}

	
});