/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	//require('./app-blog'); 
	//require('./links'); 
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	//require('./application.min');
	//require('./popper.min');
	//require('./jquery-3.2.1.slim.min'); 
	/*
	
	require('./tether.min');
	require('./jquery-3.2.1.min');
	require('./bootstrap.min');
	require('./application.min');
	*/
	//require('./popper.min');
	//require('./jquery-3.2.1.slim.min'); 
	// var Main = require('./Main');
	// var Home = require('./Home');
	// var About = require('./About');
	// var React = require('react');
	// var Router = require('react-router');
	// var {DefaultRoute, Route, Routes} = Router;
	
	/*
	var routes = (
	  <Route name="main" path="/" handler={Main}>
	    <Route name="about" handler={About} />
	    <DefaultRoute name="home" handler={Home} />
	  </Route>
	);

	Router.run(routes, Router.HistoryLocation, function(Handler) {
	  React.render(<Handler/>, document.body);
	}); 
	  
	// import React from 'react';
	// import ReactDOM from 'react-dom';


	import Chart from './components/chart';
	import rawData from '../data/data.csv';
	import {a2c} from '../utils/a2chart'; 

	console.log("test");
	console.log(metablog);

	let obj = data2.shift(),
			formatedData = {labels:[obj.name], datasets:[]},
			map = new Map();
	delete obj.name;
	for(let item in obj){
		let ds = {label:item,data:[obj.item]};
		formatedData.datasets.push(ds);
		map[item] = ds;
	}
	data2.forEach((obj, i, a)=>{
		formatedData.labels.push(obj.name);
		delete obj.name;
		for(let item in obj)
			map[item].data.push(obj[item]);
	});



	ReactDOM.render(<Chart {...data} />, document.getElementById("preact"));
	 */

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	
	console.log('blog-text-loader');
	
	document.getElementById("blogtext").innerHTML = "\n  <div id=\"18-03-22\" class=\"hidden    mar 18-03 -22  \">\n<hr />\n<button>\n  <a href=\"#top\">Top</a>\n</button>&nbsp;\n<h4 class=\"  title dailytech longtitle\">OUR DAILY TECH:</h4>\n\n<h5 class=\"  subdailytech\">Web Dev Affairs </h5>\n\n<p class=\"  author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"  chapternumber\">March 22, 2018 </h6>\n\n<h6 class=\"dailytitle chapternumber\">Hey Uber Driver, Please Slow Down!\n</h6>\n<p class=\"firstparagraph\"> </p>\n</div>\n\n\n\n<div id=\"18-03-21\" class=\"    mar 18-03 -21  \">\n<hr />\n<button>\n  <a href=\"#top\">Top</a>\n</button>&nbsp;\n<h4 class=\"  title dailytech longtitle\">OUR DAILY TECH:</h4>\n\n<h5 class=\"  subdailytech\">Web Dev Affairs </h5>\n\n<p class=\"  author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"  chapternumber\">March 21, 2018 </h6>\n\n<h6 class=\"dailytitle chapternumber\">Hey Uber Driver, Please Slow Down!\n</h6>\n<p class=\"firstparagraph\">A.I. generally, and specifically Uber's Self-Driving Tech, both have failed society this week. Although we could all debate the merits of \"Lidar\", i.e. laser-based vision, the primary concern, in my view, is Uber's obvious carelessness in rushing their self-driving tech.  Although six thousand (6,000 too many) pedestrians are killed in the U.S. annually, I'd only hope AI wouldn't add to the problem.<sup>2</sup> The Arizona victim was walking her bicycle when struck, and I as bike-commuter can't help but take the affair personally. </p>\n<p>This first human death is at least a <strong>big Wake-Up moment</strong> for the industry in its haste to roll out A.I. tech.  After all, Uber's questionable leadership morals<sup>2</sup> and being kicked out of San Francisco for running more than six red-lights raises eyebrows to begin with.<sup>3</sup> My problem with Uber is that the car's algorithm, with perfect Lidar vision, did not flinch or slow down for two seconds as it killed the victim. Humans flinch and humans swerve, because protecting fellow humans is in our DNA, not in A.I.'s. So, while we now know Uber's software hasn't caught up with its A.I.-Lidar hardware--let's hope we see defensive driving and some <i>TLC</i> programmed into those A.I. Algorithms!\n</p>\n<p class=\"cite\">1.\n  <a href=\"https://www.theguardian.com/technology/2018/mar/22/video-released-of-uber-self-driving-crash-that-killed-woman-in-arizona\" target=\"_blank\">https://www.theguardian.com/technology/2018/mar/22/video-released-of-uber-self-driving-crash-that-killed-woman-in-arizona</a>\n</p>\n\n<p class=\"cite\">2.\n  <a href=\"https://www.theguardian.com/technology/2017/apr/07/uber-waymo-lawsuit-lidar\" target=\"_blank\">https://www.theguardian.com/technology/2017/apr/07/uber-waymo-lawsuit-lidar</a>\n</p>\n<p class=\"cite\">3.\n  <a href=\"http://fortune.com/2017/02/26/uber-self-driving-car-red-lights/\" target=\"_blank\">http://fortune.com/2017/02/26/uber-self-driving-car-red-lights/</a>\n</p>\n\n</div>\n<div id=\"18-03-20\" class=\"  mar 18-03 -20\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h4 class=\"  title dailytech longtitle\">OUR DAILY TECH:</h4>\n\n<h5 class=\"  subdailytech\">Web Dev Affairs </h5>\n\n<p class=\"  author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"  chapternumber\">March 20, 2018 </h6>\n\n<h6 class=\"dailytitle chapternumber\">The Facebook Fiasco: Why Zuckerberg Should not have Dropped out of Harvard\n</h6>\n<p class=\"firstparagraph\">\nUniversities, private or public institutions, serve as a beacon for\n<strong>the Fearless Protection and Ethical Regulation</strong> of information and data. This is because data and data research\nis innate to the university's Mission Statement, whereas business and governmental institutions are relatively new\nto the game, and often at odds with the\n<i>Academy</i>, and occasionally against each other. </p>\n<p class=\"quote\">Threats to student data privacy existed long before the internet. The FBI under J. Edgar Hoover infiltrated Berkeley\nstudent groups to counter communism in the 1960s. Around the same time, the CIA manipulated the National Student\nAssociation for intelligence gathering in other anti-communism efforts. But the privacy issue is more acute now\nthat the amount of student data in cloud-based systems has grown exponentially and is more widely dispersed.\n<sup>2</sup>\n</p>\n<p> The University's expertise over ethically regulated data collection and management, is better than government, business,\nand even medical domains for two reasons. First, the institution's long history and ethical motives with data are\nunique. The norms of data-handling have been codified through the University's Institutional Review Board based\non its\n<strong>stated mission</strong>. In other words, Universities take data seriously\n<i>for reasons other than corporate profit or governmental control</i>. An example of personal data precautions has\nplayed out with Harvard's recent data tiffs leading to the Supreme Court, illustrated by a 2016 article: </p>\n<p class=\"quote\">Last week undergraduates at Harvard University raised concerns about the institution handing over their data to an\nanti-affirmative action group as part of a lawsuit. Students for Fair Admissions, which is suing the university\nfor allegedly discriminating against Asian American applicants, will have access to \u201Cacademic, extracurricular,\ndemographic and other information\u201D from all undergrads who applied to Harvard between the fall 2009 and spring 2015,\nomitting names and Social Security numbers.\n<sup>2</sup>\n</p>\n<p>The second reason why Universities understand ethical implications for data is that data and more broadly data and\nhuman information\n<i>research</i> is the institutions' second highest priority, along with teaching and service. For example, in response\nto the unethical Public Health research in\n<i>Tuskegee Syphilis experiements</i>, the University instution\n<i>stepped in</i> to help design the 1978\n<strong>Belmont Principles</strong>. Currently, the University Institutional Review Board incorporates this with the Nuremburg\nCode (developed after WWII NAZI research), in handling data research.\n</p>\n<p>In recent days,\n<i>private companies</i> claim expertise for regulating \"Fake News\", and you guessed it,\n<strong>regulation of data privacy &amp; confidentiality.</strong><sup>3</sup> The ethical authority over data privacy norms are nowhere\nelse than the University campus, case in point Harvard... Let the governments govern and the enterprises enterprise,\nand leave the\n<i>thoughtful, ethical regulation of data collection and precaution </i> to the Ivory Tower. Corporate and Government\nself-regulation is opaque enough!</p>\n\n\n<p class=\"cite\">1.\n<a href=\"https://www.theguardian.com/technology/2018/mar/21/mark-zuckerberg-response-facebook-cambridge-analytica\"\n  target=\"_blank\">https://www.theguardian.com/technology/2018/mar/21/mark-zuckerberg-response-facebook-cambridge-analytica</a>\n</p>\n<p class=\"cite\">2.\n<a href=\"https://www.edsurge.com/news/2016-10-26-pursuing-academic-freedom-and-data-privacy-is-a-balancing-act\"\n  target=\"_blank\">https://www.edsurge.com/news/2016-10-26-pursuing-academic-freedom-and-data-privacy-is-a-balancing-act</a>\n</p>\n<p class=\"cite\">3.\n<a href=\"https://www.bloomberg.com/news/articles/2018-03-21/paul-ford-facebook-is-why-we-need-a-digital-protection-agency\"\ntarget=\"_blank\">https://www.bloomberg.com/news/articles/2018-03-21/paul-ford-facebook-is-why-we-need-a-digital-protection-agency</a>\n</p>\n\n</div>\n\n<div id=\"18-03-19\" class=\"  mar 18-03 -19\">\n\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h4 class=\"  title dailytech longtitle\">OUR DAILY TECH:</h4>\n\n<h5 class=\"  subdailytech\">Sociology Tomorrow!</h5>\n\n<p class=\"  author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"  chapternumber\">March 19, 2018</h6>\n\n<h6 class=\"dailytitle chapternumber\">A New Politics of Power:\n<br /> The Cryptographic Financial Escape Hatch\n</h6>\n<p>I had originally intended for a post on the very lamentable\n<i>Blockbuster-ization</i> and eventual demise of Toys-\"R\"-Us, but Tech Affairs happen too quickly! Instead ...</p>\n<p class=\"firstparagraph\">Today, US inserted itself into a large, deep debate about crypto-legitimacy by imposing new sanctions on Venezuela.\nIn case you hadn't heard, here's a quick recap:</p>\n<p class=\"quote\">The administration\u2019s announcement came a few hours after Mr. Trump signed an executive order barring the use of any\ndigital currency issued by the Maduro government since Jan. 9. Mr. Maduro announced last month that his country\nhad begun a presale of the Petro, backed by the nation\u2019s vast petroleum reserves.\n<br />\n<br />The Venezuelan government called the launch a response to a financial crisis that has prompted a profound devaluation\nof the national currency, the bol\xEDvar, and quadruple-digit inflation.\n<sup>1</sup>\n</p>\n<p>\nThis turn of events, both Maduro et al.'s financial cleverness and Trump's action to de-legitimate the Petro crypto-currency,\nare examples of the undefined, near-limitless political uses for Blockchain Tech, both offensively and defensively.\nIn fact, the ensuing events may be of great interest as we will witness a major first actual use-case of the decentralizing\naims of crypto-technology tool. A tool that softens the financial leverage wielded by centralized authorities, whether\ngovernemntal or private.\n</p>\n<p>I used the term \"de-legitimate\" above because there are two processes at work: First, crypto-currencies are\n<i>in themselves</i> not legitimate. A\n<strong>crypto-currency platform gains legitimacy through a series of both technical and financial trust-building stages</strong>.\nSo legitimacy is earned first privately, and some currency platforms continue publicly to Initial Coin Offering,\nand so on--purely financial and technical legitimacy.\n</p>\n<p>And then, there is the another kind of legitimacy, which involves political leverage ... </p>\n<p class=\"cite\">1.\n<a href=\"https://www.nytimes.com/2018/03/19/world/americas/trump-venezuela-sanctions-petro.html\" target=\"_blank\">https://www.nytimes.com/2018/03/19/world/americas/trump-venezuela-sanctions-petro.html</a>\n</p>\n\n</div>\n\n<div id=\"18-03-17\" class=\"  mar 18-03 -17\">\n\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h4 class=\"  title dailytech longtitle\">OUR DAILY TECH:</h4>\n\n<h5 class=\"  subdailytech\">Musing Blockchain</h5>\n\n<p class=\"  author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"  chapternumber\">March 17-18 2018\n<br /> Weekend\n</h6>\n\n<h6 class=\"dailytitle chapternumber\"> Energy Alternatives Signal the Power Shift to Come, Part II: A Ripple and an Iota of Sustainable Crypto-Currency\n</h6>\n<p class=\"firstparagraph\">Iota and Ripple cryptocurrencies use different technology than traditional blockchain in order to achieve their distributed\nledgers. Traditionally, outside \"miners\" validate the block's\n<i> transaction records</i> as it replicates to the next \"block.\" For example, a transaction is validated 2 or three\ntimes, and since three miners' validations all agree, one is kept and two are destroyed, in a nutshell; one example\nof computations (\n<strong>and hence coal</strong>) that cost too much time and energy.</p>\n<p>Unlike this arrangement, Iota, Ripple, and Hedera use a directed-acyclic-graph (DAG) data structure (shaped like\na sideways genealogy tree) that relies on \"consensus\" from its nearest neighbor transaction nodes.\n<sup>1</sup>\n</p>\n<p>Enough with the jargon! The bottom line is that Bitcoin's tech is not eco-sustainable,\n<sup>2</sup> and so alternatives are already closing in on Bitcoin. Iota, the 8th largest cryptocurrency Iota delivers\nopen-source transparency, lightning speed, and yet is it cryptographically sound? Not according to some tech pundits:\n</p>\n<p class=\"quote\">You might think that IOTA, a cryptocurrency worth over a billion dollars, and working with organizations like Microsoft,\nUniversity College London, Innogy, and Bosch, BNY Mellon, Cisco, and Foxconn (through the Trusted IOT Alliance)\nwould not have fairly obvious vulnerabilities, but unfortunately, that\u2019s not the case. When we took a look at their\nsystem, we found a serious vulnerability and textbook insecure code.\n<br />\n<br /> \u201CIn 2017, leaving your crypto algorithm vulnerable to differential cryptanalysis is a rookie mistake. It says that\nno one of any calibre analyzed their system, and that the odds that their fix makes the system secure is low,\u201D states\nBruce Schneier, renowned security technologist, about IOTA when we shared our attack.\n<sup>3</sup>\n</p>\n<p>And so, with a 1.9 billion market cap, I sometimes have to reflect on the immensity and non-relational fact and figures\nof our technological world! Security and other bugs are hard to avoid when an industry is moving too fast for thoroughly\ntested betas; and each iteration involves a series of bug-patches, with short- and long-term priorities stretched\nwith new design &amp; function trade-offs.</p>\n<p>\nFull life-cycle software development, from napkin-idea to rolling specs, always follows these patterns yet not always with\nso much money on the line! Here's a closer look at one critique of Iota:</p>\n<p class=\"quote\">\nIOTA developers had written their own hash function, it was a huge red flag ... I think it\u2019s important to reiterate that\nthe IOTA developers do not agree with our characterization of this as an issue of concern. Our report lays out more\ndetails about why we are concerned.\n<br />\n<br /> There are other red flags\u200A\u2014\u200Aunlike every other program running on your laptop or phone, IOTA uses ternary instead\nof binary. Since all computer hardware today uses binary, IOTA converts to ternary in software, which is less efficient\nand more complex. This complexity prevents IOTA from benefiting from existing security analysis tools that are designed\nto work with binary, and makes the code harder to read and understand.\n<br />\n<br /> The current IOTA tangle requires a trusted party (the coordinator) for security, suggesting that in its current\nform it\u2019s not ready to run as a truly permissionless, decentralized system.\n<sup>3</sup>\n</p>\nOptimizing, not sacrificing, should be the name of the game as Tech closes in on Blockchain challenges of security, scalability,\nand that evers-so-costly\n<strong>Sustainability!</strong>\n</p>\n<p>1.\n<a href=\"https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain\"\n  target=\"_blank\">https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain</a>\n</p>\n<p>2.\n<a href=\"\nhttps://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal\n\" target=\"_blank\"> https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal </a>\n</p>\n<p>3.\n<a href=\"\nhttps://medium.com/@neha/cryptographic-vulnerabilities-in-iota-9a6a9ddc4367\n\" target=\"_blank\"> https://medium.com/@neha/cryptographic-vulnerabilities-in-iota-9a6a9ddc4367</a>\n</p>\n\n\n</div>\n\n<div id=\"18-03-17\" class=\"  mar 18-03 -17\">\n\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h4 class=\"  title dailytech longtitle\">OUR DAILY TECH:</h4>\n\n<h5 class=\"  subdailytech\">Musing Blockchain</h5>\n\n<p class=\"  author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"  chapternumber\">March 16, 2018</h6>\n\n<h6 class=\"dailytitle chapternumber\"> Energy Alternatives Signal the Power Shift to Come\n</h6>\n\n<p class=\"firstparagraph\">Sustainability for the environment means an accelerated transition to renewables. While other nations have undertaken\nbig steps toward wind and solar - even China's pollution declined in 2014 for the first time\n<sup>1</sup>. EU is now 30% renewable--from 12% in 2000 to expected 50% renewable energy by 2030\n<sup>2</sup>. Us, it appears, not so much...ouch.</p>\n<p>What can we do then, in our lives, to make our own contribution. Well, besides less fossil fuels and red meat, we\ncan choose our cryptocurrencies more conscientiously. One NY town's recent actions echo my own concerns about the\nenormous carbon footprint of \"Proof-of-Work\" blockchain mining.\n</p>\n<p class=\"quote\">\nThe city of Plattsburgh has put a moratorium on cryptocurrency mining to preserve natural resources, the health of its residents\nand the city\u2019s \u201Ccharacter and direction,\u201D officials said after a public hearing Thursday. For 18 months, the 20,000-resident\ncity will not consider new applications for commercial cryptocurrency mining. Violators will face fines of up to\n$1,000 for each day they defy the moratorium.\n<sup>3</sup>\n</p>\n<p>So, me too - count me out, I can't help but do the same, and pronounce my own refrain from Bitcoin (this is more\nspiritual since I don't own, nor mine). In contrast, I'll put Ethereum on hold since they are transitioning to a\nzero carbon-footprint by year's end. </p>\n<p>And, for the most environmentally friendly cryptocurrencies, I wholly support Ripple (3rd highest valued cryptocurrency)\nand also clean\n<i>Iota</i> (8th highest valued )\n<sup>5</sup>. Ripple, unfortunately, is a private company with a less-accessible internal distributed ledger. And yet,\nHedera Hashgraph heralds the most optimistic news of all: A blindlingly fast Hashgraph structure, unbound from any\ncarbon footprint.\n</p>\n<p>1.\n<a href=\"http://www.wri.org/blog/2017/01/china%E2%80%99s-decline-coal-consumption-drives-global-slowdown-emissions\"\n  target=\"_blank\">http://www.wri.org/blog/2017/01/china%E2%80%99s-decline-coal-consumption-drives-global-slowdown-emissions</a>\n</p>\n<p>2.\n<a href=\"https://qz.com/1193603/two-countries-are-the-reason-the-eu-is-hitting-its-ambitious-renewable-energy-targets/\"\n  target=\"_blank\">https://qz.com/1193603/two-countries-are-the-reason-the-eu-is-hitting-its-ambitious-renewable-energy-targets/</a>\n</p>\n<p>3.\n<a href=\"https://www.washingtonpost.com/business/economy/upstate-new-york-town-bans-bitcoin-mining/2018/03/16/bd6f669e-2947-11e8-bc72-077aa4dab9ef_story.html?utm_term=.6282ea8429d5\"\n  target=\"_blank\">https://www.washingtonpost.com/business/economy/upstate-new-york-town-bans-bitcoin-mining</a>\n</p>\n<p>4.\n<a href=\"https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain\"\n  target=\"_blank\">https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain</a>\n</p>\n</div>\n\n<div id=\"18-03-15\" class=\"  mar 18-03 -15\">\n\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h4 class=\"  title dailytech longtitle\">OUR DAILY TECH:</h4>\n\n<h5 class=\"  subdailytech\">Web Dev Affairs</h5>\n\n<p class=\"  author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"  chapternumber\">March 15, 2018</h6>\n\n<h6 class=\"dailytitle chapternumber\">I Love this Record Baby but I Can't See Straight Anymore:\n<br />It's Gonna be Okay, Flip that Record and Just Dance!\n</h6>\n<p>-Lady Gaga</p>\n<br />\n<p class=\"firstparagraph\">\n<strong>Creators in the Digital Age</strong>, especially Musicians, have faced just a panoply of business model challenges,\nnotably since the 2000s'\n<i>Napster Era</i>. And yet, this is the age-old-case of new technologies reshaping long-standing fields, especially\nfinancial structure - the bottom line! All creative fields also have technological features on the horizon that\nmay, potentially move the playing field. First some recent background: </p>\n<p class=\"quote\">\nWhile [Taylor Swift] is certainly making money in retail sales and digital downloads, both of those metrics are spiraling\ndownward as people migrate away from the concept of owning music at all. Nielsen recently released numbers indicating\nsubstantial drops in both CD and digital-track sales, which are down almost $100 million\n<i>year over year</i> from 2014; streaming music continues to grow, but the revenue it generates isn\u2019t close to making\nup the difference, yet.\n<sup>1</sup>\n</p>\n<p>Most remember Taylor Swift's 2014 industry-shaking album withdraw in protest to Spotify's payment structure. The\nnext year Taylor took on Apple iTunes--to which Apple bended to Taylor's Way\n<sup>2</sup>. These wins are amazing but not enough, if only for winning battles in a losing war. </p>\n<p class=\"quote\">Spotify is the future. Spotify is the enemy. Spotify doesn\u2019t pay enough. Spotify is music\u2019s best bet for revenue\ngrowth. Since it arrived in the United States from Sweden in 2011, Spotify has been cast as both hero and villain\nin the music industry\u2019s continuing debate over streaming music. </p>\n<p class=\"quote\">\nIt has been hailed as a potential savior through a two-tiered \u201Cfreemium\u201D model that would gradually lure listeners away from\npiracy. Yet Spotify\u2019s royalty rates have also terrified many artists already worried that each new step in music\u2019s\ndigital evolution further devalues their work.\n<sup>3</sup>\n</p>\n<p>So the trend looks dire, and yet is it really? Where, just where are the\n<strong>Tech Platforms </strong> leading us? Tech is leading us\n<i>nowhere</i>, at least not to one\n<strong>singular, centralized place</strong>; rather, decentralized tech--including but not limited to blockchain--is busy\nrewriting the boundaries between creators and consumers. This Tuesday's Forbes article reported on new subscription-based\nmodel by Patreon. Still classical Web 2.0, it's novelty appears so simple, almost intuitive in potentially new pathway:</p>\n<p class=\"quote\">\"On Kickstarter and Indiegogo, creators essentially have to start over every time,\" says Danny Rimer, a partner at\nIndex Ventures who is a Patreon investor and board member. \"It's the same reason software companies went from licensed\nsoftware to subscriptions: predictable revenue and better service for customers.\"\n<sup>4</sup>\n</p>\n<p>\nApparently Patreon, along with last November's\n<i>Drip</i> by KickStarter have made headway. Patreon paid out $150 million to its artists in 2017, and each are doubling\nannually. Decentralizing again. Well, we say we can't\n<i>go back to the way it was</i>, but Tech always seems to lead us back to the way it was!\n</p>\n<p>1.\n<a href=\"https://www.nytimes.com/2016/01/25/magazine/touring-cant-save-musicians-in-the-age-of-spotify.html\" target=\"_blank\">https://www.nytimes.com/2016/01/25/magazine/touring-cant-save-musicians-in-the-age-of-spotify.html\n</a>\n</p>\n<p>2.\n<a href=\"http://www.businessinsider.com/taylor-swift-new-album-reputation-not-on-spotify-apple-music-streaming-2017-11\"\n  target=\"_blank\">http://www.businessinsider.com/taylor-swift-new-album-reputation-not-on-spotify-apple-music-streaming-2017-11\n</a>\n</p>\n<p>3.\n<a href=\"https://www.nytimes.com/2014/11/12/business/media/taylor-swifts-stand-on-royalties-draws-a-rebuttal-from-spotify.html\"\n  target=\"_blank\">https://www.nytimes.com/2014/11/12/business/media/taylor-swifts-stand-on-royalties-draws-a-rebuttal-from-spotify.html\n</a>\n</p>\n\n\n<p>4.\n<a href=\"https://www.forbes.com/sites/kathleenchaykowski/2018/02/13/digital-medici-how-this-musician-turned-entrepreneur-plans-to-save-creators-from-advertising/#6063ea771313\"\n  target=\"_blank\">https://www.forbes.com/sites/kathleenchaykowski/2018/02/13/digital-medici-how-this-musician-turned-entrepreneur-plans-to-save-creators-from-advertising\n</a>\n</p>\n</div>\n\n<div id=\"18-03-14\" class=\"  mar 18-03 -14\">\n\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h4 class=\"  title dailytech longtitle\">OUR DAILY TECH:</h4>\n\n<h5 class=\"  subdailytech\">Sociology Tomorrow!</h5>\n\n<p class=\"  author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"  chapternumber\">March 14, 2018</h6>\n\n<h6 class=\"dailytitle chapternumber\">\n<i>Tou\n  <strong>Demou</strong> tes\n  <strong> Krates</strong>\n</i>:\n<br />Strength of the People</h6>\n\n<p class=\"firstparagraph\">Today's demonstrations and walk-outs, led by America's Youth and followed by many of the education staff, has aimed\ndirectly at Gun-Control legislation. Yet, the message more powerfully articulated than ever by adolescent-turns-adult\nstudents, takes aim at something further afield. </p>\n<p>Students, remembering the February 14th massacre victims, take aim at the corruption stemming from the 2010 Supreme\nCourt \"Person-hood\" protection for Corporations, also known as the\n<i>Citizens United</i> Decision. A dated, but poignant, article from National Public Radio explains:\n</p>\n<p class=\"quote\">The Supreme Court extended that protection to corporations, and over time also extended some \u2014 but not all \u2014 of the\nrights guaranteed to individuals in the Bill of Rights.\n<sup>1</sup>\n</p>\n<p>\nYet, it appears deceptively harmless for Congressional Law-makers to protect corporations, in the form of\n<strong>Gun Manufacturers' Lobbyists, </strong>\nas equally as it protects humans. The origin or this ruling dates to a 70's Neo-Liberal, right-leaning legislation and Court\nrulings that include a pivotal 1978\n<i>First National Bank of Boston v. Belloti</i> decision allowing for corporations' ballot-initiative campaign contributions,\nciting the First Amendment.\n<sup>2</sup>\n</p>\n<p>\n\nThe Result? The corporation, in \"person\" form, takes on Pseudo-Human qualities: immortal, beyond-measure capital, and programmatically\nserving stock-holders' interests with cut-throat competition at all costs. No match against a sympathetic human,\nyet the Corporation is given the same rights and privileges as the man in the street. Now, in the face of two decades'\ndead humans--as young as\n<i>Sandy Hook Elementary</i>, which were not protected by Legislation, due to commitments made to corporate lobbying.\n</p>\n<p>It appears increasingly difficult for Marco Rubio to accept money from gun lobbyists\n<i>in exchange</i> for executing their legislation demands. As I mentioned in my\n<a href=\"#18-02-14\">February 14th post</a> on the topic, it is clear a generation is awakening: And, the Humans have begun to revolt\nagainst the\n<strong>Heavily-Armed Lobbying Machines!\n</strong>\n</p>\n<p>1.\n<a href=\"https://www.npr.org/2014/07/28/335288388/when-did-companies-become-people-excavating-the-legal-evolution\"\n  target=\"_blank\">https://www.npr.org/2014/07/28/335288388/when-did-companies-become-people-excavating-the-legal-evolution</a>\n</p>\n<p>2.\n<a href=\"http://www.ncsl.org/research/elections-and-campaigns/campaign-finance-and-the-supreme-court.aspx#dnn_ctr77443_HtmlModule_lblContent\"\n  target=\"_blank\">http://www.ncsl.org/research/elections-and-campaigns/campaign-finance-and-the-supreme-court.aspx</a>\n</p>\nhttp://www.ncsl.org/research/elections-and-campaigns/campaign-finance-and-the-supreme-court.aspx dnn_ctr77443_HtmlModule_lblContent\n</div> \n<div id=\"18-03-13\" class=\"mar 18-03 -13\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>\n<h4 class=\"title dailytech longtitle\">OUR DAILY TECH:</h4>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">March 13, 2018</h6>\n\n<h6 class=\"dailytitle chapternumber\">The Sharing Economy Hand-in-Hand with the Market Economy:\n<br /> Part III and Sustainability of Shared, Distributed Ledger Types</h6>\n\n<p class=\"firstparagraph\">March 13th, 2018 marks the day that certain types of blockchain technologies, notably Bitcoin and Ethereum, face\nan existential crisis: Today, a new distributed ledger technology has been announced, which departs from the traditional\n\"Proof-of-Work\" (energy-intensive calculations) Blockchain technologies. This is critically important to zero carbon-footprint.\nFor example, Bitcoin calculations drain more energy, 50 TeraWatt/hrs per year--higher than Singapore's 49.8!</p>\n<p>Next, the primary security flaw of consensus-based leadership like Ripple, Iota (as opposed to\n<i>random-selection blockchain leadership</i> based on carbon-intensive calculations) is they are susceptible to Hacking:\nDenial-of-Service Attacks are possible because the next leader Block can be anticipated and followed by a Bot),\nso the blockchain cycle is attacked at every cycle. </p>\n<p>The Heder Hashgraph unveiled today overcomes this problem by using a 39-node-leader hashgraph data structure. Interestingly,\nthis is based on the original Visa Credit Card design from the 1950's (then called AmericaBank) for authenticating\nsystem. </p>\n<p>\nNext, The Heder Hashgraph overcomes the problem of \"fairness\" because blockchain transactions are\n<i>\n  <strong>not ordered in each cycle</strong>.</i> Bitcoin transactions are haphazardly lumped together in each block-cycle,\nwhich is ~12 minutes. Which means that time-sensitive financial data queries will always lose! </p>\n<p>\nSwirld's unveiled their consensus-based\n<strong>Hashgraph, a type of distributed ledger technology (DLT),</strong> last year. Today, it has now been announced to\ndeploy in late 2018 on the Hedera Hashgraph public network. This is tremendous news! Tremendous, since I explained\nin my\n<a href=\"#18-03-01\">March 1st </a> blog post that older blockchain technologies incentivize miners' efforts by directly tying electrical-cost(\n(in calculations) to the Bitcoin/hour profit margin. For this reason, the future horizon just considerably shortened\nBitcoin's runway for establishing anything beyond \"early-adopter\" status. </p>\n<p>So, we'll see if the innovating crew with Vitalik Buterin's Ethereum can successfully alter the crypto algorithm\ninto it's planned carbon-free consensus-based, \"proof-of-stake\" form. For the moment, Bitcoin, Ethereum, and other\nelectricity-draining \"proof-of-work\" designs, have their\n<strong>exchange value trapped inside their own Carbon Footprint</strong>.\n<sup>4</sup> And so, because environmental sustainablity is foremost of concerns for future investment, survival may\ndepend on digging out of that Carbon Footprint much more quickly!</p>\n\n<p>1.\n<a href=\"https://www.forbes.com/sites/jeffkauflin/2018/03/13/hedera-hashgraph-thinks-it-can-one-up-bitcoin-and-ethereum-with-faster-transactions/#175e5c79abcb\">\n  https://www.forbes.com/sites/jeffkauflin/2018/03/13/hedera-hashgraph-thinks-it-can-one-up-bitcoin-and-ethereum-with-faster-transactions/#175e5c79abcb\n</a>\n</p>\n\n<p>2.\n<a href=\"https://www.coindesk.com/hedera-hashgraph-swirlds-no-fork-guarantee-cryptocurrency-touts-resistance-code-splits/\"\n  target=\"_blank\">\n  https://www.coindesk.com/hedera-hashgraph-swirlds-no-fork-guarantee-cryptocurrency-touts-resistance-code-splits/</a>\n</p>\n\n<p>3.\n<a href=\"https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/\"\n  target=\"_blank\">\n  https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/</a>\n</p>\n\n\n<p>4.\n<a href=\"https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/\" target=\"_blank\">https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/</a>\n</p>\n</div>\n\n<div class=\"mar 18-03 -12\" id=\"18-03-12\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h4 class=\"title dailytech longtitle\">OUR DAILY TECH:</h4>\n\n<h5 class=\"subdailytech\">Sociology Tomorrow!</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">March 12, 2018</h6>\n\n<h6 class=\"dailytitle chapternumber\">The Sharing Economy Hand-in-Hand with the Market Economy:\n<br /> Part II and New Forms of Trust</h6>\n<p class=\"firstparagraph\">\nThroughout the centralized-tech period of the\n<i>mobile-powered </i> Web 2.0, most Sharing transactions take place on a centralized platform that simply facilitates\nthe peer-to-peer transactions. However, the trust is based on some third-party authority. For instance, Uber serves\nas the centralalized, third-party authority between both consumers (whether resource-obtaining or resource-providing)\nmust place their trust. Similarly, centralized authorities like Paypal, etc. enable peer-to-peer collaboration.\nYet, the notion of trust remains unsolved: Both parties must place their faith in the third party. By definition,\nthis problem that undermines the\n<i>Sharing Economy</i> is resolved by Blockchain technologies, through cryptography. Now, Decentralized Apps (DAPPS)\nprovide a truer sharing platform for value transactions.\n</p>\n<p>In short, neither peer,\n<strong>neither consumer needs to be trusted, because both parties share a mutual trust in their shared ledger</strong>\n(think of a thick book with an indexed log of each and every transaction, with unchangeable entries etched by cryptography.\nIn this fashion the forms of Exchange Value include:\n<br /> 1. Value Funds &amp; Investments\n<br /> 2. Immutable Insurance &amp; Risk Management\n<br /> 3. Account for &amp; Audit Commodified Value 4. Authenticate &amp; Attest to Value\n<br /> 5. Transfer, Store, Lend Value\n<br />\n</p>\n</div>\n\n<div class=\"mar 18-03 -10\" id=\"18-03-10\">\n\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h4 class=\"title dailytech longtitle\">OUR DAILY TECH:</h4>\n\n<h5 class=\"subdailytech\">Web Dev</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">March 10-11, 2018\n<br /> Weekend\n</h6>\n\n<h6 class=\"dailytitle chapternumber\">The Sharing Economy Hand-in-Hand with the Market Economy:\n<br /> Part I and the Race for Sustainability Solutions</h6>\n\n<p class=\"firstparagraph\">Sharing can be a philosophy and even an ideology, but it is also\n<strong> a concept sewn into the Technology of the Era</strong>. Sharing economy refers to both democratized peer-to-peer\nmarketplaces,\n<i>and</i> collaborative, resource-circulating consumption systems where the consumer&#39;s role is provider or obtainer\nof resources. By either sense, the\n<i>Uberized</i> economy is made possible by the underlying platform of Decentralized Technologies. Mobile social media,\ninternet, and blockchain tech creates the conditions needed for a convenient, community-based transactions.</p>\n\n<p>Bitcoin and Ethereum crypto-contracts grab the headlines, however it is the very nature of blockchain&#39;s\n<i>distributed, i.e. shared, </i>ledger that revolutionizes how humans interact, and how they exchange and share goods\nand services. So, how might a transactional, zero-sum Market Economy merge with a Sharing Economy?</p>\n\n<p>In\n<i>The Third Industrial Revolution, </i>Social and Economic theorist, Dr. Jeremy Rifkin, provides insight into how\nthe\n<strong>Sharing Economy can grow alongside the traditional Market Economy</strong>.\n<sup>1</sup> The theory argues three (3) breakthroughs are needed to create the conditions necessary for a new &quot;general\npurpose technological platform,&quot; and thus an Industrial Revolution. They are management/commmunication of power,\nsources of new power/energy, and the transportation of this power.</p>\n\n<p>The first condition: New forms of communication to\n<i>manage</i> power, for example steam-powered printing press, trans-oceanic telegraph, then later telephone. The second\ncondition: New energy sources, for example steam-engine using coal and other fossil fuels. The third condition:\nNew methods to transport energy, i.e. the steam engine on rails, then later fossil fuel vehicles.</p>\n\n<p>So what&#39;s new about today? 5G Cellular technology coupled with decentralized, blockchain internet; Second, improving\nsolar &amp; wind power coupled with decentralized, bi-directional energy grid; and third, transporation by automatated,\ndriverless shipping for example. So, why is this important, even vital to adapt a new paradigm that fits the new\ntechnology? exponential populstion growth and exponential climate changes are top of the list.</p>\n\n<p>Britain&#39;s innovations with steam &amp; coal characterized the first Industrial Revolution, and America&#39;s\ninnovations in telephones, oil-fueled vehicles, and centralized transportation grid, however the innovations in\nthe present era are much quicker than previous eras... which means we as a society can embrace more proactively\nthe New Paradigm needed to adapt.</p>\n\n<p>So, how can we change the way we\n<i>think</i> and how we\n<i>react</i> depends on our worldview, and how deeply entrenched. Thomas Kuhn&#39;s 2004 publication on\n<strong>\n  <i>The Structure of Scientific Revolution</i>\n</strong>\n<sup>3</sup> explains how society will drag its feet in the face of change, and only after decades of controversy will\na New Paradigm Shift emerge. In this occasion however, we as a society may not have the luxury of decades to adapt\nto New Technologies, as the carbon hangover from the previous Industrial Era imperils the safe arrival of the next!</p>\n\n<p>&nbsp;</p>\n\n<p>1.\n<a href=\"https://www.foet.org/books/the-third-industrial-revolution/\" target=\"_blank\">https://www.foet.org/books/the-third-industrial-revolution/</a>\n</p>\n\n<p>2.\n<a href=\"https://www.economist.com/node/21553017\" target=\"_blank\">https://www.economist.com/node/21553017</a>\n</p>\n\n<p>3.\n<a href=\"https://projektintegracija.pravo.hr/_download/repository/Kuhn_Structure_of_Scientific_Revolutions.pdf\"\n  target=\"_blank\">3. Kuhn, Thomas, The Structure of Scientific Revolutions, </a>\n</p>\n</div>\n\n<div class=\"mar 18-03 -09\" id=\"18-03-09\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Web Dev Affairs</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">March 9th, 2018</h6>\n\n<h6 class=\"dailytitle chapternumber\">&#39;Alexa, can you laugh?&#39;</h6>\n\n<p class=\"firstparagraph\">Alexa has made headlines about reports of unexplained laughter responses\n<sup id=\"0309-1\">1</sup>. Information like this needs a\n<i>\n  <strong>fact-check</strong>\n</i> &agrave; la Snopes.com.\n<sup id=\"0309-2\">2</sup> And, whether or not Alexa misheard, &quot;Alexa, laugh&quot;, or not, is less important than the\n<i>socially-intrusive consequences</i> of simple app-development errors. The first issue is simply that programmer\n<strong>logic </strong> and user-interface intuition should be as clear (and generalized) as possible. This is easier said\nthan done, for example the recent case of Hawaii&#39;s mistaken\n<i>incoming-ballistic-missile warning system</i>.\n<sup id=\"0309-3\">3</sup> As it turned out, the dropdown-menu design placed the &quot;Send Test Warning&quot; next to &quot;Send Warning&quot;\nin an unintuitive, fail-possible manner. Oops.</p>\n\n<p>While most focus on Alexa et al.&#39;s actions and abilites, in the name of caution, but rather the larger issue\nfalls on how much we allow ourselves to mentally depend on tech for things.</p>\n\n<p>1.\n<a href=\"https://www.buzzfeed.com/venessawong/amazon-alexa-devices-are-laughing-creepy?utm_term=.um6P18a8a#.cgggP2j2j\"\n  target=\"_blank\">https://www.buzzfeed.com/venessawong/amazon-alexa-devices-are-laughing-creepy?utm_term=.um6P18a8a#.cgggP2j2j</a>\n</p>\n\n<p>2.\n<a href=\"https://www.snopes.com/fact-check/is-amazons-alexa-emitting-unprompted-creepy-laughing/\" target=\"_blank\">https://www.snopes.com/fact-check/is-amazons-alexa-emitting-unprompted-creepy-laughing/</a>\n</p>\n\n<p>3.\n<a href=\"https://www.washingtonpost.com/news/morning-mix/wp/2018/01/16/that-was-no-wrong-button-in-hawaii-take-a-look/?utm_term=.a2aa65329002\"\n  target=\"_blank\">https://www.washingtonpost.com/news/morning-mix/wp/2018/01/16/that-was-no-wrong-button-in-hawaii-take-a-look/?utm_term=.a2aa65329002</a>\n</p>\n</div>\n\n<div class=\"mar 18-03 -12\" id=\"18-03-08\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Sociology Tomorrow!</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">March 8, 2018</h6>\n\n<h6 class=\"dailytitle chapternumber\">1.4 Million Reasons for More Women in Tech, Part II\n<br />\n<br /> * Continuation of Women in Tech Theme from\n<a href=\"#18-02-23\">Feb. 23rd Blog</a>\n</h6>\n\n<p class=\"quote\">This is the first time in human history that we have the ability to see enough about ourselves that we can hope to\nactually build social systems that work qualitatively better than the systems we&#39;ve always had.</p>\n\n<p class=\"quote\">--Author unknown</p>\n\n<p class=\"firstparagraph\">My February 23rd Post on women in tech focused on the\n<i>workforce demand</i> for more women in tech positions, however today I&#39;m writing on the\n<strong>\n  <i>social need</i> for more female insight within the tech workforce</strong> , given that programming will increasingly\nshape our future institutions. This means that every institution, whether private hospitals, non-profit charity\nfoundations, or government bureaus, will effectively restructure (optimize) their own organizational structure in\nan increasingly\n<i>data-driven</i> paradigm. From a Sociology of Organizations perspective, the changes to come are breath-taking to\nconsider.</p>\n\n<p>So why women? Where could I start? Better stated, why is a quintessentially important job sector, a sector in desperate\nneed for insight, comprised primarily of men?\n<sup id=\"one\">1</sup> The facts are evident: ~15-20% of women comprising tech positions.\n<sup id=\"two\">2</sup> Numbers aside, I argue there is a quintessential societal need for more women in tech: This is because computing\nand understanding data has changed since the data collection from Web 2.0 (mobile), becoming more networked and\nrelational.</p>\n\n<p>The challenge for society in this age is historic, and women must absolutely be included in the process of the age:\nPlease consider, that in the 1650&#39;s, the invention of the microscope opened a new world of data and\n<i>information</i> about the bacteriological, microscopic surroundings--hitherto blind to all. Likewise, the telescope\nhas allowed us as a society to explore the outer universe and earth&#39;s position within it.</p>\n\n<p>Now, the inventions of machine-learning, computing coupled with Big Data analytics, allows us to explore (and manage)\na universe of knowledge--about\n<i>ourselves</i>, human society--with unfathomably complex, unstructured relational data structures. Accessing the\ndata to computer-readable form is one thing, but meaning in data is inaccessible until the\n<i>output</i> can be\n<i>re-</i>programmed into meaningful, human-readable data, i.e. information. This latter stage of development is the\nkey challenge--for which success depends on representative female participation in Tech.</p>\n\n<p>Adding to the challenge of finding meaningful trends is the backdrop of noise from spurious variables. This is akin\nto finding a needle in an increasingly complex and growing haystack.</p>\n\n<p class=\"quote\">What&#39;s different now and has changed is it&#39;s no longer about taking this data, putting it into a computer\nrunning a calculation and getting a balance sheet answer ...</p>\n\n<p class=\"quote\">What&#39;s important now is what is the context of the data, what is it connected to, what effect is it having on\ndata around it... It&#39;s basically a network of the data, it&#39;s no longer sort of tabular columns, of rows\nof data, it&#39;s\n<i>interconnected patterns</i>.\n<br /> --Tim Cook</p>\n\n<p>This quote means that as we move away from rule-based, mechanistic data analytics toward more complex, relational\nand networked data, we need an equally complex paradigm to keep up. Excluding the female mind from this challenge\nis not simply a clumsy, myopic mistake. Worse yet, so long as the Tech Industry remains gender lop-sided, Tech will\nincreasingly resemble another myopic beast, a cave-dweller named Cyclops.</p>\n\n<p>1.\n<a href=\"https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html\" target=\"_blank\">https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html</a>\n</p>\n\n<p>2.\n<a href=\"https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages\" target=\"_blank\">https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages</a>\n</p>\n\n<p>3.\n<a href=\"https://www.aauw.org/research/why-so-few/\" target=\"_blank\">https://www.aauw.org/research/why-so-few/</a>\n</p>\n</div>\n\n<div class=\"mar 18-03 -12\" id=\"18-03-07\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Web Dev Affairs</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">March 7, 2018</h6>\n\n<h6 class=\"dailytitle chapternumber\">About the April 23 Implementation of the FCC Net Neutrality Laws:\n<br /> The Coming Battle of States&#39; versus Federal Rights Part II</h6>\n\n<p class=\"firstparagraph\">Washington&#39;s assertion of States&#39; Rights yesterday may augur the first of many lawsuits over control over\nbandwidth.</p>\n</div>\n\n<div class=\"mar 18-03 -12\" id=\"18-03-07\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Web Dev Affairs</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">March 6, 2018</h6>\n\n<h6 class=\"dailytitle chapternumber\">April 23 Implementation of the FCC Net Neutrality Laws:\n<br /> The Coming Battle of States&#39; versus Federal Rights</h6>\n\n<p class=\"firstparagraph\">Net Neutrality Rules, potentially one of the more important set of Individual Rights for us as citizens in the tech\nage, will soon undergo the rule changes voted by the Federal Communications Commission (FCC) this past December.\nIn a nutshell, the Internet Service Providers (ISP&#39;s), e.g. Comcast, Cox, Verizon are granted the power--as\na Title I &quot;information service&quot;--to slow down traffic, make fast- &amp; slow-lanes. Of course this is\nbad news for internet-users because even premium users may experience &quot;throttling&quot; if using the ISP&#39;s\npreferred apps. The only stipulation holds that the ISP&#39;s rules are made public. However, 21 states are bringing\nlawsuits to fight these changes, and the first assertion of State Law by Washington State today:</p>\n\n<p class=\"quote\">The FCC is already embroiled in a variety of lawsuits related to its rollback of net neutrality rules, including\nan effort from 21 state attorneys general to get a court to block the FCC&#39;s move.</p>\n\n<p class=\"quote\">&quot;This is symbolic politics, because the states know it is illegal to do,&quot; Roslyn Layton, a visiting scholar\nat the American Enterprise Institute, told NBC News. &quot;But they can put rules on the book and make it look like\nthey&#39;re doing something.&quot; The FCC is already embroiled in a variety of lawsuits related to its rollback\nof net neutrality rules, including an effort from 21 state attorneys general to get a court to block the FCC&#39;s\nmove.\n<sup>1</sup>\n</p>\n\n<p>S The big question arises over\n<i>who</i> has jurisdiction between the States&#39; and Federal authority; yet one thing is certain, the coming battle\nfor protecting citizens&#39; rights will take place over jurisdiction of Internet Bandwidth turf.</p>\n\n<p>\n<a href=\"https://www.nbcnews.com/tech/tech-news/washington-state-passes-net-neutrality-law-states-push-back-against-n854086\"\n  target=\"_blank\">https://www.nbcnews.com/tech/tech-news/washington-state-passes-net-neutrality-law-states-push-back-against-n854086</a>\n</p>\n\n<p>&nbsp;</p>\n</div>\n\n<div class=\"mar 18-03 -12\" id=\"18-03-05\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Healthy Today!</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">March 5, 2018</h6>\n\n<h6 class=\"dailytitle chapternumber\">A Return to the Question of Guns, Germs, and Steel: Part II and the Germs</h6>\n\n<p class=\"firstparagraph\">Germs present a timely topic for today, given the especially virulent\n<strong>Flu Virus strain</strong>. Many, like me, have wondered why our 1940&#39;s-era\n<sup>1</sup> technology in Flu Vaccine fabrication wouldn&#39;t invite more innovative solutions. Without feigning any\nmedical expertise, I have to still ask about the progress made with the ever-mutating--i.e., drifting--Flu virus&#39;\nsurface protein &quot;head,&quot; called hemaglutinin. This strategy &quot;guesses right&quot; very effectively,\nand provides an effective solution for most, in most years. Yet this winter has revealed that effectiveness statistics\nare\n<i>not always</i> in our favor.</p>\n\n<p class=\"quote\">For many decades, researchers believed the flu vaccine offered solid protection if it was a good match to the circulating\nstrains; studies from the 1940s through the 1960s routinely showed an efficacy of 70% to 90%. But those studies\nrelied on a misleading methodology.</p>\n\n<p class=\"quote\">Danuta Skowronski, an epidemiologist at the BC Centre for Disease Control in Vancouver, Canada, instead blames mutations\nin the vaccine strain itself. The most common influenza vaccine contains an &quot;inactivated&quot; virus, which\nmanufacturers grow in chicken eggs. As Skowronski&#39;s team first reported in 2014, the virus can mutate while\nit is growing in the eggs, resulting in a vaccine unable to block circulating strains.\n<sup>1</sup>\n</p>\n\n<p>Earlier, I casually mentioned &quot;guessing&quot;, yet with great respect, the science behind estimating the flu\nvirus between the time of R &amp; D, fabrication, and the flu\n<i>season</i>. (This antigenic drift, not to be confused with\n<i>Antigenic Shift</i> in which the Flu Virus makes an abrupt change.) I&#39;ll let the CDC abbreviate this:</p>\n\n<p class=\"quote\">One way they change is called &ldquo;antigenic drift.&rdquo; These are small changes in the genes of influenza viruses\nthat happen continually over time as the virus replicates. These small genetic changes usually produce viruses that\nare pretty closely related to one another, which can be illustrated by their location close together on a phylogenetic\ntree. Viruses that are closely related to each other usually share the same antigenic properties and an immune system\nexposed to an similar virus will usually recognize it and respond\n<sup>2</sup>.</p>\n\n<p>So, ultimately, the strategy is to estimate the form, location, of that virus--what it will look like--at a particular\nperiod each year. This implicates a strategy to estimate the trajectory, stage by stage, of this virus, i.e. a longitudinal\ntime-series morphology, each year. The article makes this point more precise:</p>\n\n<p class=\"quote\">But these small genetic changes can accumulate over time and result in viruses that are antigenically different (further\naway on the phylogenetic tree). When this happens, the body&rsquo;s immune system may not recognize those viruses.\n<sup>2</sup>\n</p>\n\n<p>Petri dishes aside, let&#39;s focus on the changing nature of the Flu Virus, which makes itself a\n<i>research </i>challenge in itself because of an ever-mutating object of study. Yet, this ever-changing nature also\nprovides the very tool Statisticians need most for estimating: Big Data. The Law of Large Numbers means that plain\nmath can accurately plot, and in most cases predict with a moderate statistical significance, future events, sort\nof.</p>\n\n<p>Sort of I say because too often we predict that two separate events are more likely to occur, conditional on each\nother, then conditional upon other factors. This being\n<i>correlation</i>, but the Statistician&#39;s Holy Grail is the other kind: Causality. Causality hinges on only thre3e\nthings: 1) Association, 2) Time Precedence, and 3) Ruling out any\n<i> effect</i> of spurious variables. (Hang with me, I&#39;m still getting back to the subject of our annual predictions\nabout a few months&#39; worth of antigenic drift.)</p>\n\n<p>Therefore, Big data, and new advances in the statistical sciences, and the technology that increasingly defines our\nsciences, may soon refine and supercharge research into the first and third of the three points of causality. The\nfirst of these, the associations, along the phylogenetic tree, are merely a network at its base, the science of\nwhich gains computational strength each year. Rare as it is in Academia, in this case Might makes Right!</p>\n\n<p>\nThe third tenet of causality, after association and time direction, is ruling out the effect of other factors when separating\n<i>cause</i> and consequence. Advances in managing big data, and statistical analysis of it, means gaining a better\nhandle on the multiple effects of\n<sup>spurious </sup>factors, hence analysis optimized by new, network-graph data structure technology. The Law of Large\nNumbers\n<sup>3</sup>, i.e. the sheer number of mutations and other factors, coupled with new\n<strong>technology</strong>, will better inform the morphology of the\n<i>path</i> of the virus, along the phylogenetic tree itself. Who knows where a cure may come from, perhaps a bio-statistician\nout there, churning the numbers, may be the one to stumble upon a better Flu Vaccine!\n\n</p>\n<p>1.\n<a href=\"http://www.sciencemag.org/news/2017/09/why-flu-vaccines-so-often-fail\" target=\"_blank\"> http://www.sciencemag.org/news/2017/09/why-flu-vaccines-so-often-fail </a>\n</p>\n\n<p>2.\n<a href=\"https://qz.com/1143420/the-2017-2018-flu-vaccine-is-less-effective-than-usual\" target=\"_blank\"> https://qz.com/1143420/the-2017-2018-flu-vaccine-is-less-effective-than-usual </a>\n</p>\n\n<p>3.\n<a href=\"https://www.cdc.gov/flu/about/viruses/change.htm\" target=\"_blank\"> https://www.cdc.gov/flu/about/viruses/change.htm </a>\n</p>\n\n<p class=\"quote\">&nbsp;</p>\n</div>\n\n<div class=\"mar 18-03 -12\" id=\"18-03-03\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Sociology Tomorrow!</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">March 3-4, 2018\n<br /> Weekend\n</h6>\n\n<h6 class=\"dailytitle chapternumber\">A Return to the Question of Guns, Germs, and Steel</h6>\n\n<p class=\"firstparagraph\">Back in 1997, a Pulitzer-Prize winning theory--based on Dr. Jared Diamond&#39;s\n<i>Guns, Germs, and Steel: The Fate of Human Societies</i> --provided the recipe book for the success of societies.\nNot without controversy, the theory posits that geographic and environmental preconditions, once met, provide tech\n&amp; resources trading opportunities, within a network of other nation-states also vying for technogical innovation.</p>\n\n<p>A nation&#39;s Technology, in turn, opens the means necessary to expansive, stable, independent sovereignty that\nlasts and thrives. Equally so, the nation&#39;s friends, especially those making the best-friends list, share and\nreceive a secondary, &quot;residual&quot; technological bump over the time-course of the network&#39;s future trading,\ni.e. network transactions. So, if our best friends Canada and Mexico are less keen, then there is network reverberation!</p>\n\n<p>Given the advent of a real, lasting Trade-War, I would think that a network theorist wouldn&#39;t be betting on one\nparticular node within this network. I say this because a disproportionately asymmetrical flow of technology and\nresources, while simultaneously raising prices on most staple goods, may spell trouble for the Every-Day person.\nSo far, Nation-State: 0, People: 0 ... So, who wins with a Trade War? Alas, let&#39;s hope not the resurrection\nof the Neo-Multi-National Corporations, born from NAFTA deals, coincidentally, from the late 1990&#39;s. Bah humbug!</p>\n\n<p>&nbsp;</p>\n\n<p>1.\n<a href=\"http://www.jareddiamond.org/Jared_Diamond/Guns,_Germs,_and_Steel.html\" target=\"_blank\">Guns, Germs, and Steel. &quot;Steel: The Fates of Human Societies.&quot; Diamond J (1997).</a>\n</p>\n</div>\n\n<div class=\"mar 18-03 -12\" id=\"18-03-02\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Web Dev Affairs</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">March 2, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">Widening Circles of Mobile-App Security Risks</h6>\n\n<p class=\"firstparagraph\">Security, security, another day another platform risk, or risks from your device, or risks from transactions, Today&#39;s\nheadline buried beneath a techy jargon provides a glimpse of the rising threat of web-application-based hackery:\nCryptojacking.\n<i>Coindesk</i> reports, &quot; Opera browser introduces cryptocurrency miner protection for smartphones ... &quot;</p>\n\n<p class=\"quote\">Cryptocurrency miners can overload smartphones&#39; CPUs, forcing 100 percent usage and potentially causing a phone\nto overheat. And the damage can sometimes be permanent. According to a ZDNet article, one trojan generated so much\nheat in a phone, its battery became swollen, permanently damaging the phone. While excessive ads were one reason\nfor the heat generation, the main cause was that the phone&#39;s CPU was hijacked to mine for Monero.\n<sup>1</sup>\n</p>\n\n<p>The larger issue here is that the lines between trusted mobile-app authorities, i.e., certified by Play Store or\nApple&#39;s is increasingly irrelevent. This is because an increasing number of app-users are ditching device-downloaded\napps, preferring for browser applications--hence, a much more appetizing market for the newest generation of blackhat\nhackers, online thieves, peeping-toms, and other ill-wishers. There are a few driving factors for this issue--one\nof which is the onset of Decentralized Applications (DAPPs), which use the\n<i>browser</i> to interface between the Every-Day blockchain client/merchant/programmer and the actual byte-code of\nthe blockchain (via WEB).</p>\n\n<p>More importantly, the larger issue is that we live in an age in which the exclusive, native browser language since\n1995, i.e. JavaScript. Security issues with browser-based apps were very low, because JavaScript never left the\nbrowser, ever. Until 2009, Data, Servers were the domain of PHP, JAVA, Python, etc. or some other language for the\nhighly sensitive, dirty work of dipping into all that data sitting ontop of centralized servers around the world.\nPHP wasn&#39;t easy, so power and responsibility usually followed with all the extra effort and expertise.</p>\n\n<p>2015 augured in the Node.js server-accessing (can create, read, update, and delete date) new-born capabilities of\nJavaScript</p>\n\n\n<p>1.\n<a href=\"\nhttps://www.coindesk.com/opera-browser-introduces-cryptocurrency-miner-protection-for-smartphones/\n\" target=\"_blank\"> https://www.coindesk.com/opera-browser-introduces-cryptocurrency-miner-protection-for-smartphones/ </a>\n</p>\n</div>\n\n<div class=\"mar 18-03 -12\" id=\"18-03-01\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">March 1, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">Blockchain Sustainability Issues and The Double-Edged Sword</h6>\n\n<p class=\"firstparagraph\">I couldn&#39;t help but revisit the\n<strong>Environmental Sustainability</strong> problem I addressed in my February 28th post. This problem, experienced by\nthe top two crypto-currencies Bitcoin and Ethereum, is that the\n<i>monetary</i> value of the currency is matched to the\n<i>computing difficulty</i>--measured either by how much the computer is sweating, or by electricity KiloWatt Hours\nper year.\n<sup>1</sup> Digiconomist succinctly writes:</p>\n\n<p class=\"quote\">The continuous block mining cycle incentivizes people all over the world to mine Bitcoin. As mining can provide a\nsolid stream of revenue, people are very willing to run power-hungry machines to get a piece of it. Over the years\nthis has caused the total energy consumption of the Bitcoin network to grow to epic proportions, as the price of\nthe currency reached new highs.\n<sup>2</sup>\n</p>\n\n<p>And, so the issue I&#39;m addressing is a side-effect of the deepening incentivization for miners to invest more\nequipment, and in turn, more electricity. The article goes on to report Bitcoin&#39;s surpassing 50 TeraWatt-Hours-per-year\nusage has surpassed that of Portugal and Singapore, which are 49.5 TWh per year, and 49.8 TWh per year, respectively.\nIn other words, the usage by the Bitcoin miner&#39;s cost (in electricity) compared with the miner&#39;s gain (in\nBitcoins accrued by incentivized mining) drives up and incentives a deeper Carbon Footprint.</p>\n\n\n<p class=\"quote\">Fueled by a meteoric rise in the Bitcoin price over the past few months, the power usage of the Bitcoin network has\nbeen increasing at a feverish pace. Just a little over three months ago, at the start of November 2017, the Bitcoin\nEnergy Consumption Index was estimating the total electricity consumption of the Bitcoin network to be half of the\ncurrent amount. On the first day of November, the estimated consumption was equal to 24.3 TWh per year.\n<sup>1</sup>\n</p>\n\n<p>\nCarbon Footprint, measured in this way, equates as a double-edged sword: The miner&#39;s electricity costs account for approximately\n65% of the profit (Bitcoin units&#39; value, measured when mined). So the\n<i>economic </i>usage means the cheapest available fuel is part of the business model--and it would lead to the cost\nof the cheapest source of energy: Dirty Coal. At the end of the day, if the\n<i>currency&#39;s </i>rising value means that more computationally-intensive mining is more and more profitable, then\nperhaps the other edge looks preferred!\n</p>\n\n<p>1.\n<a href=\"\nhttps://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal\n\" target=\"_blank\"> https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal </a>\n</p>\n\n<p>2.\n<a href=\"\nhttps://digiconomist.net/bitcoin-energy-consumption\n\" target=\"_blank\"> https://digiconomist.net/bitcoin-energy-consumption </a>\n</p>\n\n</div>\n\n<hr />\n<button id=\"febtop\">TOP</button> \n<br />\n<h4>POSTS FEBRUARY 2018</h4>\n<br />\n<h6>First Blog Post!</h6>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-10\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 10, 2018</h6>\n\n<h6>First Blog Post!</h6>\n\n<h6 class=\"chapternumber dailytitle\">Why are Sociologists now the Key Players in Data Analysis within the Domain of Blockchain Technologies?</h6>\n\n<p class=\"firstparagraph\">First, let me describe that blockchain technologies, i.e. Government contracts, Business contracts, Bitcoin and other\ncryptocurrencies, all rely on network graph theory, both on the low-level programming technology (peer-to-peer global\nip networks) across the spectrum to high-level interfaces for institutional, corporate, individual needs and uses.\nThese blockchain &quot;network&quot; analyses depend on highly variable--and simultaneous--network changes, node\nchanges, and link changes; and, the latter three may arbitrarily change interdependantly or not.</p>\n\n<p>Therefore, blockchain technologies must first accomodate complex node variables for contracts (relationships) that\ninclude arbitrarily hierarchical mappings and conditional data structures. Secondly, blockchain tech must face analytical\nchallenges that arise from informal practices\n<sup>1</sup>, by which the organizational nodes (employees) choose to deviate from the employee role&#39;s protocol for\nthe sake of efficiency, convenience, company culture, and multiple other levels of human factors.</p>\n\n<p>Sociologists Meyer &amp; Rowan&#39;s (1977)\n<i>New Institutionalism</i> explains how employees change practices and decouple\n<i>actual</i> organizational structure from recorded rules, as a function of organizational size, time, convenience,\netc. These continually new, unknown constraints on data must be intimately understood, non-algorithm human understanding\n<i>by at least one side </i>of the exchange. How do we recognize unwritten, soft rules and behaviors of a bank, a person,\nor a company&#39;s internal bot?</p>\n\n<p>The hard sciences domain of Software Engineering, Computer Science, and Mathematics have brilliantly brought the\nworld the blockchain tool, for which the Hard Sciences can only contribute little on how to interface with social\nneeds. Ask yourself, how well do 1,000 top blockchain-related programmers understand the multi-dimensional layers\nof hierarchical social, corporate, and governmental relationship networks? Well enough to differentiate qualitative\nmeaning in the smart-contract? Fearfully, no.</p>\n\n<p>In the past, the layers of abstraction from raw technological tool to societal use was refined, improved, integrated\nthrough multiple layers of &quot;middlemen&quot;, such as lawyers, corporate lawyers, government institutions, non-governmental,\nnon-profit and for-profit actors. Blockchain technology, by its very nature, erases the middlemen. Suddenly, one\nprogrammer, for example, is writing the same healthcare insurance crypto-contract, that last month an entire team\nof hospital employees spent a month writing; then overseeing and managing different facets of this same thing.</p>\n\n<p>However, the crypto-contract, once deployed to the blockchain, auto-manages the rest, forever or for the life of\nthe contract. Therefore, rather than redoing the trials and errors of 200 years&#39; Sociology Network Analysts&#39;\nresearch and analytical development. Therefore, medical and other social fields cannot and should not turn to the\nHard Sciences for solutions. These Med researchers and developers are already at home, safe within the academic\ndomain of the Raw Sciences of Medical Sociology, Public Health, and so on. The next ten years of blockchain technology\ncan either be defined by unwitting, piecemeal advances, accompanied by frequent, non-improving distastrous crises.\nOr, the next ten years can follow Sociology&#39;s Scientific Method toward a mildly turbulent, but stable and beautiful\nfuture.</p>\n\n<p>Examples aside, the primacy of the Sociology academic field in the early 21st century quickly becomes apparent on\nreview of the Sociologists&#39; specialization in network theories imbued with symmetrical and asymmetrical relationships,\nwithin social networks that change arbitrarily the direction, conditions, and values of those same relationships.\nWe Sociologists deal with real-time, logical and hierarchical network mappings that appear arbitrary, yet are characterized\nby fixed patterns.</p>\n\n<p>No other academic field than sociology has advanced into the details, and endless network rabbit-holes that characterize\nsocietal behavior. Not until this second millenial decade could the marriage of Large Number Statistical Theory\nbecome consumated with the brilliance of early 1900&#39;s Sociological French Network Theories, like Maurice Halbswach&#39;s\nwork on the clearly defined network patterns of a society&#39;s Collective Memory.</p>\n\n<p>No other academic field has collected and refined knowledge on network arbitrariness, such that Economic&#39;s &quot;irrational\nbehaviors&quot; and Mathematical &quot;complexity models&quot; do not\n<i>touch to the bone</i> the meaning, the intersectionality of network analysis, which must incorporate simultaneous\nnode changes (person gets job /or/ does not get job), network changes (All get jobs /or/ only 3 of 15 network groups\nget jobs), and most importantly the\n<i>relationship</i> changes (all jobs always useful /or/ half of job groups no longer useful) across time and fixed.</p>\n\n<p>Fine. So, why is Sociology&#39;s network theory so valuable beyond just the network insights gleaned from 19th and\n20th centuries&#39; network problems? Follow: European sociology came of age in the analog social era, while North\nAmerican Sociology only recently come of age (Quebec in the 1960&#39;s [post-1968], U.S. in the 1990&#39;s[post-1999],\nin the digital social era. Therefore, the problem-solving patterns of past sociology are inherently small-data and\nmore qualitative analysis, and thus only Sociology incorporates &quot;human-ness&quot; into the billion rows and\ncolumns of quantitative--numbers-only--analysis.</p>\n\n<p>For example, Oxford-developed S.I.E.N.A. Software accomplishes this task. SIENA--named for Simulation Investigation\nfor Empirical Network Analysis--software calculates the real-time values, direction, and conditions of each relationship\n(link) in a network, simultaneously as each node, network, or alter-link changes or is changed; with this, it is\npossible to isolate directional, conditional\n<i>influence change</i> in real-time. Real-time sounds impossible, however, the SIENA documentation\n<sup id=\"9one\">2</sup> describes its program algorithm to the statistical analysis of network data, with the focus on social networks.</p>\n\n<p>An easy example to grasp this is the concept of whether a person\n<i>self-selects </i>(e.g., due to subconscious leanings) into a group and thus matches to fruition the group&#39;s\nbehavior with little group influence? Or does this same person join a group and emulates the group&#39;s behavior,\nby the group&#39;s influence over time. Sociological network analysis, using Snjder&#39;s SIENA software, achieves\nthe impossible with the closed, directed graph networks that characterize blockchain technology. The network graph\ncan be here understood as entire (complete) networks (i.e, the blockchain in its entirety without hard forks), not\nas personal (egocentered) networks: Using this SIENA model allows for the necessary assumptions that a set of nodes\n(social actors) is given, and all ties (links) between these nodes are known - except perhaps for a moderate amount\nof missing data</p>\n\n<p>If, and only if, this level of analysis may be achieved, the blockchain development may follow a linear, directed\npath of maturity with social and world needs. Until that time, that Sociology Network Theorists are called upon,\nblockchain developers will continue to bat their arms in the dark, stumbling over again the same bugs. Sadly, this\nsemi-opaque future implicates the same fate as those that attempt to use blockchain for their currency, contract,\nand other societal needs--in this case, the blind will indeed lead the blind.</p>\n\n<p class=\"footnotes\">1.\n<a href=\"http://www.journals.uchicago.edu/doi/abs/10.1086/226550\" id=\"9one\" target=\"_blank\"> http://www.journals.uchicago.edu/doi/abs/10.1086/226550</a>\n<br />\n</p>\n<p>\n2.\n<a href=\"https://www.stats.ox.ac.uk/~snijders/siena/\" id=\"9one\" target=\"_blank\"> https://www.stats.ox.ac.uk/~snijders/siena/</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-11\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Web Dev Affairs</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 11, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">How Can We Best Modularize our App Designs in Order to Achieve the Much Vaunted &quot;Separation of Concerns&quot;?</h6>\n\n<p class=\"firstparagraph\">There was once a time for App Developers that our habits followed our inner-philosophers--as an Esteemed Order of\nCoders--we held ourselves in the highest regard to separate form from function, and style from structural design.\nHence, in the early 2000&#39;s, a tri-partite, sensible world guided every web coder to abide by The scaffolding\nof HTML, functionality of JavaScript, and styling of CSS. A decade later, we must throw out this antiquated division\nof labor within web coding.</p>\n\n<p>Library modularization, (think JQuery, JSX, Bootstrap, etc.) within Javascript ES16 reveals that modules and components\nMust hold together CSS/HTML/JS, part by part. So, if a decade ago three teams handled html, js, css, it is now requisite\nto divide up 3 teams to 3 components (a team for the carousel widget, a team for the navigation widgets, and\n<i>\neach</i> of these component teams\n<strong>must</strong> be maintained together, not separately, the module&#39;s required html, js, css.</p>\n\n<p>This means that the new Division of Labour can no longer follow past patterns from 5 years ago. Otherwise, any and\nall coding will necessarily begin to &#39;reinvent the wheel.&#39; This is because any module, any library you go\nto, will\n<i>already</i> have its HTML pre-configured, JS pre-configured, CSS pre-configured. Thus, attempts to extricate new\ncss from one module to another (or worse yet, sharing css of modules), will only invite eventual misery, almost\ninstantly setting booby traps for the next coders upon arrival.</p>\n\n<p>So, where is the creativity? Where is the originality then? It is not gone. It has evolved to a higher level of abstraction,\nleaving to automation the boring stuff. So, if Vanilla JS is considered malpractice in the modern world, and if\nad-hoc JQuery is mocked and scoffed at by React coders, then where is creativity? If yesterday&#39;s craft was the\nhoisting of 15 javascript functions on each page, the New Art of modular coding is akin to a game of Tetris. Part\nby part, module by module, the modern coder open-source window-browses and window-shops; goes home, and cuts and\npastes, and folds and clips, then assembles and hangs to dry. Do Python programmers rewrite each particular module\ndefinition? That&#39;s absurd. Equally absurd is the javascript programmer that rewrites from scratch their modules.</p>\n\n<p>The esteemed Order of JavaScript Coders must wake up, and regain its work-load balance in this new age--an age that\neach year since 2014, the JavaScript language is rewritten, each year now, in both syntactic sugar and also fundamental\nstructure--especially the importing and exporting of modules. Therefore, philosophical Honor behooves each of us\nto a higher complexity, and a new commitment to, the &quot;Separation of Concerns.&quot; We can allow ourselves\na break, thankful for Progress, a progress by which we must\n<i>Stand on the Shoulders of Giants</i>, and Code-Create!</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-12\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Web Dev Affairs</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 12, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">Mark Zuckerberg&#39;s Innocence</h6>\n\n<p class=\"firstparagraph\">Facebook Scandals\n<sup>1</sup> of recent months have demoralized the leadership for a role of misinformation in the Tech Age, however I\ncharge Mark Zuckerberg&#39;s innocence\n<i>not</i> because all of us, as a society, were equally warned. Rather, arbitrary mathematical forces created abnormal,\nnever-before-seen network structural density and symmetry patterns. Technological shifts were so efficient at multiplying\nand exacerbating misinformation because a curious sociological network phenomenon rendered parts of our daily social\nlearning and acculturating process to network forces out of our own control.</p>\n\n<p>A January 2016 American Sociology Association Newsletter Editorial\n<sup> 2</sup> from Sally T. Hillsman, in which she explained how the social mechanisms of our own misinformation were\nnot entirely within our own control to resist. In fact, the arbitrary (often random) social structural changes from\nhigher social-media hours, create an arbitrary social network structure whose links (in their content and influence)\nbegin to dominate over nodes (each of us). In other words, the sway of trends and opinionated critical thought becomes\ndominated by the relationships, e.g., the &quot;likes&quot; and &quot;shares&quot;, leading to a statistically natural\npropensity toward homogeneity--a.k.a. group-think. The mechanism is akin to peacefully swimming close and parallel\nto the coastline, and (due to random coastal floor structure), a rip-tide suddenly ships you far out to sea--a fatal\nand tragic fate rendering experienced swimmers out of their own control. Same principle with an arbitrary\n<i>underlying and unseen</i> network structure.</p>\n\n<p>Our social network structures always are prone to continual shift, and so the usual &quot;interruptions&quot; that\npreviously stopped this inward shift soon began to disappear. Hillsman explains:</p>\n\n<p class=\"quote\">Lies, half-truths, and misinformation spread so rapidly across the public through digital communication that the\ntimespan for thoughtful, effective correction or rebuttal is infinitesimal. Because of confirmation Bias, misinformation\nand outright lies quickly strengthen preconceived truths or pre-held beliefs that are already hard to change.</p>\n\n<p>Therefore, even though we all have been pointedly warned,\n<i> none of us</i> without advanced sociological analysis skills could understand that a curious network phenomonenon--ultimately\ndriven by some arbitrary mathematical calculation involving size, density, symmetry, conditional influences, and\nthe strength of ties outweighing network nodes. For the reasons of these factors, our social inclinations were\n<i>out of our control</i> -- no, but really, this time they were!</p>\n\n<p>And so, we can learn from Sociology what steps to take in order to counteract random, but risky, network phenomena\n-- because nobody likes to go for a swim at the beach, and unwittingly get shipped out to sea!</p>\n\n<p class=\"footnotes\">1. Wired Magazine\n<i>Inside the Two Years that Shook Facebook--and the World</i> (February, 2018)\n<a href=\"https://www.wired.com/story/inside-facebook-mark-zuckerberg-2-years-of-hell\"\n  target=\"_blank\"> Wired Magazine, </a>\n<br />\n<br /> 2.ASA\n<i>Footnotes</i>. (January, 2016)\n<a href=\"http://www.asanet.org/footnotes/jan16/index.html\" target=\"_blank\"> www.asanet.org/footnotes/jan16/</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-13\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Sociology Tomorrow!</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 13, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">The Modern Doctors&#39; Updated Preparation for the Oath\n<sup>1</sup> of Hippocrates:\n<br /> On the 2015 Social Sciences Modification to the AAMC Medical College Admissions Test (MCAT)</h6>\n\n<p class=\"firstparagraph\">Other than college pre-med students, few know the MCAT exam--the gatekeeper of U.S. &amp; Canadian Medical Schools--underwent\na major modification in 2015.\n<sup>2</sup> Much deeper than Biological and Technological updates, major sections were added and/or expanded including\nthe Social, Pyschological and Biological foundations of\n<i>behavior</i>. Named the\n<i>Health Systems Science</i>\n<sup>3</sup>, the American Medical Association&#39;s modern, holistic approach articulates outcomes-based measures for\nhealthy living and disease prevention efforts. You could say the AMA is indeed,\n<i>woke</i>.</p>\n\n<p>But really, what&#39;s the difference and why would we care? And, who doesn&#39;t know that an apple-a-day keeps\nthe doctor away? Dr. Jeffrey Borkan, MD, PHD of Brown University&#39;s Warren Alpert Medical School, explains the\nevident role of all those unnoticed social interactions involved in obtaining and consuming that apple. Further,\nthe spatial and economic\n<i>availability</i> of that apple also plays a role in keeping the doctor away. Borkan explains:</p>\n\n<p class=\"quote\">It&#39;s time for us to take a leap forward in educating physicians for the health care delivery models of the future&mdash;those\nthat aim to improve not just the health of the individual patient and their family, but also the community and the\npopulation.\n<sup>4</sup>\n</p>\n\n<p>What, then, specifically, are the mechanisms that a community network&#39;s aggregated health may be inextricably\ntied up with\n<i>our own</i> individual health? In short, they are the sharing of health-promoting resources, timely assistance,\nhealth-promoting information channels -- all this, among the countless perks of a healthy social circle!</p>\n\n<p class=\"citations\">1.\n<a href=\"http://www.greekmedicine.net/whos_who/The_Hippocratic_Oath.html\" target=\"_blank\">The Oath of Hippocrates</a>\n<br /> 2.\n<a href=\"https://students-residents.aamc.org/applying-medical-school/article/changing-mcat-exam/\" target=\"_blank\">The 2015 AAMA Changes to the Medical College Admissions Test</a>\n<br /> 3.\n<a href=\"https://www.ama-assn.org/education/teaching-new-content-health-systems-science\" target=\"_blank\">American Medical Association&#39;s\n  <i>Teaching New Content Health Systems Science</i>\n</a>\n<br /> 4.\n<a href=\"https://www.ama-assn.org/education/teaching-new-content-health-systems-science\" target=\"_blank\">ibid.</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-14\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">\n<s>Web Dev Affairs</s> Sociology Tomorrow!</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 14, 2018</h6>\n\n<p style=\"color:green;\">\n<i>Due to the Tragic Events in Florida, Tech to the Rescue blog Rescheduled to February 16th ...]</i>\n</p>\n\n<h6 class=\"chapternumber dailytitle\">\n<s>Tech to the Rescue: Secondary health effects of the Fitbit toward health-information sharing channels within a community.</s>\n</h6>\n\n<p class=\"firstparagraph\" style=\"color:green;\">Given that a community network&#39;s aggregated health is inextricably, and symmetrically, tied up with\n<i>our own</i> individual health, app-developers may design activity- and communication-based apps more responsibly,\nand in touch with modern healthcare recommendations. After all, if the Saintly Mark Zuckerberg&#39;s communication-\nand activity-based app inadvertantly led to novel, and deeply consequential, effects, then ...</p>\n<span class=\"alert\">* Given the Tragic Events in the School Shooting in Florida, I felt a topic of more gravity was in order ... :( </span>\n\n<h6 class=\"chapternumber\">Feb 14, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">A New Kernel, and the Manifestation of a Two-Hundred Year Problem named\n<i>Anomie</i>\n</h6>\n\n<p class=\"firstparagraph\">Given the tragic events at a Florida school over Valentine&#39;s Day, 2018, who can write about Fitbits? So, thoughts\nand sympathy for those students today that endured this horror. 19 years after the first-of-its-kind school shooting,\nwe as an American society have not become &#39;numb&#39; to these events. It hurts as much as it did in 1999.</p>\n\n<p>Darn that innocuous Spring day in 1999, when we heard the most absurd news-- students attacked their own colleagues\nat Colombine? In my blog post from January 10, I wrote that American Sociology, along with Qu&eacute;bec, came of\nage much later than European Sociology. The past 50 years&#39; social changes and new problems are generally atrributed\nfor the increasing demand for sociological expertise after 1999, after a singular, senseless tragedy of a school\nshooting--this event, like a small kernel of societal desperation for a solution--led to a flurry of self-professed\nsociologists &agrave; la Michael Moore&#39;s Colombine, and other social-responsibility themed social consciousness.\nSo far, only mutually incompatible solutions. The problem, however, is not new, only the manifestation of it.</p>\n\n<p>Suicide rates in 19th century France, disproportionately high, also served as a symptomatic manifestation of the\nsame problem, called\n<i>Anomie.</i>\n<sup>1</sup> The term,\n<i>Anomie</i>, coined by Emile Durkheim in the late 1800&#39;s, captured the sense of instability, cultural and moral\nrelativism that undermined a shared sense of meaning. Suicides, week-after-week, month-after-month? In 1897 France,\nnoone had ever seen it before--at such rates--and people wanted answers. Alas, a kernel of social desperation leading\nto inquiry.</p>\n\n<p>People wanted to know why so many in the population responded negatively to the rapid changes, urbanization (Dreadful\nfactory conditions &agrave; la\n<i>Taylorism&#39;s</i> calculated efficiency) new technologies, i.e. electricity, railroads, steam engines; these created\nan arbitrarily new world, very suddenly. Suddenly, like trying for the first time a roller-coaster, when all you&#39;ve\never known has been the carousel. So, we see technology&#39;s role for well or for ill, our job is to understand\nhow to dial-in the tech specs necessary to keep society smiling on this roller coaster through another, yet not\naltogether new, technological thrill-ride.</p>\n\n<p>1.\n<a href=\"https://www.researchgate.net/publication/228173911_The_Sociology_of_Suicide\" target=\"_blank\">1897, Suicide, &Eacute;mile Durkheim.</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-15\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 15, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card</h6>\n\n<h6>\n<small class=\"jargon\">Tech blockchain jargon alert ahead, with all effort made for clarity! I treat a broad overview of the existing trajectory\n  of blockchain-related micro-economic advancements. I make a technical &amp; contextualizing\n  <abbr title=\"this link just goes down 5 paragraphs to Feb. 17th\">\n    <a href=\"#18-02-17\"> three-part blog series in my Feb. 17-20 posts</a> on the micro-economic horizon of blockchain technologies.</abbr>\n</small>\n</h6>\n\n<p class=\"firstparagraph\">Has anyone else been underwhelmed by the lack of Bitcoin&#39;s daily\n<i>presence</i>, despite its everpresence at the dinner tables and caf&eacute;s across America. Sure, it&#39;s more\nof a &quot;metropolitan&quot; phenomenon; and sure, it&#39;s become an accepted global platform--along with myriad\nother crypto-currencies, but it&#39;s exchange-worthiness remains shrowded, and misunderstood by many. Cryptocurrencies\nare useful as a vehicle for investment, and yes, there are Bitcoin millionaires due to the currency&#39;s rise to\nfame with last year&#39;s increase in value (from $1,000 to ~$20,000) etc., etc. But, so far its contributions,\nuses, fame are one-sidedly\n<i>macro-</i>economic. A recent CNET article\n<sup>1</sup>, among others, documents miniscule (and not improving) percentage of\n<i>actual</i> use at the &quot;cash-registers&quot; of society.</p>\n\n<p>Is there something wrong with such little micro-economic usage? Not at all! According to general sociological\n<i>Early Adopter</i> theory--based on Everett M. Rogers&#39;\n<i>Diffusion of Innovations</i>\n<sup>2</sup>--the timeline of the Innovation Adoption Lifecycle is fairly ordinary. That is, the Roger&#39;s bell curve\nranges from the beginning innovators, to early adopters, early majority, and late majority. However, the blockchain\narticles always miss the point. Currencies are more of a distraction compared to the genuine usefulness for the\nevery-person, in every-day affairs, on a given day--i.e., micro-economic use.</p>\n\n<p>The true value, the kind that makes our lives easier on any given day, and for the every-person, is\n<i>not</i> the currency, it is the contract, that allows for individualized, targeted sharing of specific information--whether\nfinancial, governmental, or any other centralized database. An example is in order before I continue, since we can\nall relate to the risk of using a credit or debit card, the risk most notably concerning Target store credit card\nhacks a couple years ago.</p>\n\n<p>Suppose a person shops at 3 different retailers, using a different credit card for each. For these 3 transactions,\nthis person had only needed to provide two discrete pieces of information about themselves for each transaction:\nthey prove they have the $27, $200, and $5; and they prove a third party(i.e.,CC or bank)will make that $27, $200,\nor $5 available, if their client agrees. Instead, for each transaction, they open their\n<i>entire</i> financial information, and can only hope that law-enforcement will prevent cyber-theft; and if the store&#39;s\ndatabases are hacked, then tough-luck!</p>\n\n<p>Crypto-contracts provide the technology for this individualized, risk-free transaction, rather than for each transaction,\nproviding the generalized information for individual transaction. Highly inefficient! Nobody thinks to walk around\nwith their life-savings in cash, then at the 7-11 store, to open their wad of cash and peel out a bill. The credit\ncard system, blessed as it is, did not previously have technology to avoid this very thing. So, financial institutions\nhave had to rely on the many layers of security, passwords, pins, mothers&#39; maiden names, etc. Then, based on\nthe mathematics behind prime numbers, they hope to keep your money safe in one, centralized spot--with a bright\nred target on it.</p>\n\n<p>Now, the crypto-contract provides this decidedly *micro-economic* experience for the everyday person. And that, my\nfriends, has nothing to do with crypto-currencies. There is no micro-economic value in crypto-currency, instead\nthe crypto-\n<i>contract</i> is the true, unsung hero, and a hero we will all get to know. [personal opinion - this hero&#39;s name\nis the Ethereum Virtual Machine]. In any case, Crypto-contracts provide this ability to provide pinpointed,\n<i>specific, targeted information</i> as citizens, too. When we provide our drivers license number, for the sake of\nrenting that car, we provide every aspect of information of ourselves to Hertz. They don&#39;t need this. They need\nto know only and exclusively driving-record related details--not the entire governmental database of information\nabout you!</p>\n\n<p>1.\n<a href=\"https://www.cnet.com/news/bitcoin-cryptocurrency-big-in-investing-but-still-lousy-for-buying-a-sandwich/\"\n  target=\"_blank\">https://www.cnet.com/news/bitcoin-cryptocurrency-big-in-investing-but-still-lousy-for-buying-a-sandwich/</a>\n</p>\n\n<p>2.\n<a href=\"https://eric.ed.gov/?id=ED065999\" target=\"_blank\">Rogers, E. M., &amp; Shoemaker, F. F. (1971). Communication of Innovations; A Cross-Cultural Approach.</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-16\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Web Dev Affairs</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 16, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">Tech on the Regret: Unintended, secondary effects of communication- and activity-based app-designs</h6>\n\n<p class=\"firstparagraph\">Given that our app-use is inextricably tied up with our own behavior, activity/communication-based app developers\nhave in the past year accepted (mostly in word) a renewed responsibility. More like resposibility for a multi-faceted\npower of influence granted to an industry, suddenly, disproportionately great, and\n<i>semi-arbitrarily related</i> to the designer&#39;s intent (and control!). After all, if the Saintly Mark Zuckerberg&#39;s\nactivity/communication-based app inadvertantly led to novel, and deeply consequential, effects, then anyone could.</p>\n\n<p>After all, who could guess\n<i>how</i> these app-design effects would affect the users, years later. Who do we think programmers are, sociologists?\nMore specifically, who could know\n<i>which</i> mundane coding practices, arbitrary app-design--like sharing permissions/features? Sure, everyone deep\ndown knew their company practices yield unfathomable power of influence over the daily habits of cell-users, a.k.a.\neveryone. The easy part is knowing; the hard part is learning how and why certain app-features lead to behavioral\nrisks.</p>\n\n<p>There could be no better example than the Alcoholic faced with an intervention by a loving family longing for change.\nThe alcoholic could be forgiven for past misdeeds, but without actual\n<i>Acknowledgement</i> of a crisis in direction, which necessitates professional help from social scientists. Therefore,\nthe recent\n<i>acknowledgments</i> signify something deeper--they signify a humility that app-designers are not sociologists, generally\nspeaking. So, that means hiring sociologists, psychologists, anthropologists for every N\n<small>th</small> app-coder and software engineer. History can&#39;t be rewritten, but it can be interpreted and learned\nfrom. The acknowledgment is itself a victory if it induces learning from the raw, social sciences, whose expertise\n<i>can</i> predict how or why certain &quot;life&quot;-features, practices, and policies often unfold with undue and\nunintended social consequences.</p>\n\n<p>Water under the bridge, but going forward, it is one thing to claim a &quot;renewed sense of remorse&quot;, another\nto acknowledge, learn and change. Like last November\n<sup>1</sup> when Facebook co-founder Sean Parker confessed certain designs like &quot;social-validation feedback loop&quot;\nand other app-design intentions, while ignoring potential secondary effects on society. So, the\n<i>Acknowledgment</i> is the big win here--not so much the remorse!</p>\n\n<p>1.\n<a href=\"https://digitaladdictsblog.com/facebook-co-founder-says-company-built-to-exploit-you/\" target=\"_blank\">https://digitaladdictsblog.com/facebook-co-founder-says-company-built-to-exploit-you/</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-17\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 17-18, 2018\n<br /> Weekend\n</h6>\n\n<h6 class=\"chapternumber dailytitle\">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part II:\n<br />\n<br /> Seven Nuts &amp; Bolts Features of the New Blockchain Micro-Economy\n<br />\n<small class=\"jargon\">Tech jargon alert ahead, with all effort made for clarity! Here, I provide a technical &amp; contextualizing addition\n  to my\n  <abbr title=\"this link just goes up 7 paragraphs to Feb. 15th\">\n    <a href=\"#18-02-15\"> February 15th blog post</a>\n  </abbr> on the micro-economic horizon of blockchain technologies. </small>\n</h6>\n\n<p class=\"firstparagraph\">7 Ethereum-based technological features offer us a new world -- a decentralized new world, not dependent on the centralized\nservers of Instagram, Comcast, T-Mobile, Amazon, etc. With that statement ends general consensus among blockchain\nexperts, pundits, and authors. However, if the current logistical obstacles provide controversy and competing algorithms\nover sustainability, security, and scalability, then they reveal much more about the general pathway of social uses\n(and potential effects) than they hide. In my February 15th\n<a href=\"#18-02-15\">blog</a>, I touched on a few features of micro-economic uses so as to distinguish the more certain aspects of the\ncrypto-contract horizon.</p>\n\n<p>\n<strong>Prologue</strong>\n</p>\n\n<p>So, what are some core features of block-chain technology that affect the quality of our lives, and the\n<i>productivity</i> of our work as a society of academics, public-sector and private-sector professionals? First, a\nlittle background and context before I outline seven blockchain functionalities. The Ethereum blockchain helps distinguish\nitself--and its blockchain-native language Solidity--from earlier tech, like Bitcoin and other Proof of Work-based\nblockchains. Ethereum blockchain offers a syntax and programming features, e.g. &quot;looping&quot;, &quot;recursion&quot;,\nwith the full power of a\n<i>Turing Complete</i> language--that is, given enough resources, the language can solve any programmable problem.</p>\n\n<p>More background and a clarifying metaphor are in order: The Bitcoin blockchain transaction resembles the accounting\nsystem of a foos-ball table point rack with a basic calculator glued to the side. In contradistinction, An Ethereum\nblockchain transaction would resemble a network of computers,\n<i>which is itself,</i> a computer--hence, the name Ethereum Virtual Machine. This allows for Quickbooks to calculate\ninto a PDF to be sent via an email contract-signing program. Much more useful!</p>\n\n<p>Therefore, Ethereum&#39;s Blockchain is more than a networked, chained list of blocks, like Bitcoin. The Ethereum\nblockchain is actually a &quot;Virtual Machine&quot;, like a a big networked &quot;home computer&quot;. The native\nlanguage of the blockchain, Solidity, allows for an\n<i>application binary interface</i>, ABI. So, for example, I can type up an Ethereum contract on my home computer,\nthen directly access by command line the blockchain itself. In layman&#39;s terms, the manner that modern-day app,\nfor example Instagram, is a centralized API (Application Programming Interface) that allows one programming system\nto interact with another, such as Instragram offers a &quot;sharing API&quot; that connects to hardware contacts,\nthus facitilating communicating with third-party aplications, like sharing your instagram picture to your Facebook\naccount, via your T-Mobile phone&#39;s contacts list. This API relationship broadly describes the modern world we\nlive in, wherein a Chryser driving system exchanges API information with your T-Mobile Bluetooth network system,\nwhich exchanges API information with your own contact list, and so on, and our lives are made easier.</p>\n\n<p>So, are we out of the woods? Has Ethereum solved the blockchain question? Yes, if it were the 1920 pre-relativity\ndays; However, with the advent of quantum computing, potential security vulnerabilities immediately arise. The reason\nbeing that digital math uses binary &quot;on/off&quot; calculations, while quantum math implicates a tertiary,\n<i>qubit</i> &quot;simultaneous states&quot;. Therefore, we have now entered the 3rd generation of blockchain technology,\nboth programmable, but also quantum-proof due to mathematical graph features. For example, IOTA&#39;s blockchain\ndesign utilizes a\n<i>Winternitz One-Time Signature</i>, by which one&#39;s transaction is entered into with a private-key, and the blockchain\nmoreso resembles a &quot;Tangle&quot; of a directed graph, which allows for computational &quot;states&quot;. IOTA\nrecently garnered criticism in January 2018 due to an unfortunate crypto-hack, that exposed an apparent vulnerability.\nIn truth, this was a case of user-error because users were\n<i>re-using</i> their one-time keys, which significantly decreases security to the point that a home computer could\ncrack the code! I choose to not digress further, and quantum computing is not quite advanced enough now to cause\ndamage, but in the future could potentially split the blockchain in two, or other quantum possibilities.</p>\n\n<p>In sum, the technical obstacles change each month, however one must not lose sight of the forest for the trees. Social\nuseablity, potential scope and of course unintended consequences have all finally begun to emerge, at least in form,\nwith little difference between the 2nd generation blockchain or the 3rd generation Patrician directed graph blockchain.\nThe underlying principle of the blockchain&#39;s micro-economic utiliity through crypto-\n<i>contracts</i> is the same, as opposed to plain crypto-currency. you know the usual bartering solutions for Supply\n&amp; Demand leading to Economics Game Theory, etc. This is where we must take our leave of the Hard Sciences of\nMathematics, and enter the realm of Sociology, Psychology, Anthropology and Economics.</p>\n\n<p>&nbsp;</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-19\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 19, 20189</h6>\n\n<h6 class=\"chapternumber dailytitle\">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part III:\n<br />\n<br /> Seven Features of the New Blockchain Micro-Economy\n<br />\n<small class=\"jargon\">Tech jargon alert ahead, with all effort made for clarity! The first 3 of 7 new possibilities thanks to the programmable\n  blockchain.</small>\n</h6>\n\n<p class=\"firstparagraph\">The guiding light through the centuries of scientific paradigms, in the Kuhnian sense\n<sup id=\"19-1\">1</sup>, have derived from deductive ideas from above - whether priestly or royal decree. Then, the primacy of the\n<i>Scientific Method</i> from the Renaissance forward--punctuated first by Copernican Heliocentrism, then other Paradigm\nShifts--has directed rational and ethical norms in each respective period, e.g. Enlightenment authors of 17th, 18th\ncentury. Fast forward to the modern period, wherein the current era&#39;s emerging paradigm holds Sharing as a collective-priority\nand responsibility, then an amazing philosophical moment.\n<i>Historical Materialism</i>\n<sup>2</sup> prescribes what is directly here a novel Paradigm Shift by which authority is not derived from governmental,\nfinancial sources, but rather the\n<i>shared</i>societal consensus about cryptographic, mathematical proofs as true authority. Further, the revolutionary\nshift also innately provides tools for implemention through decentralized, programmable data-sharing. Cryptography\nhas in a sense become a\n<i>de jure</i> middle-person for identification and verification of property.</p>\n\n<p>\n<strong>I. Protecting rights through immutable records</strong>\n<br /> Inalieable Rights can now be identified and verified by the cryptographic authority of a mathematical proof, rather\nthan exclusively through governmental or financial institutions from above. The modern period also has held this\ndecentralized, individual authority as the\n<i>a priori</i> starting points for philosophical proofs. Premises about truth begin with the conditions of humankind,\nnot idealogies. In fact, it was the\n<i>Young Hegelians</i> of early 19th century Vienna &amp; Berlin, who ushered in the Modern Era of Western Philosophy,\nby laying out Truth as inverted, beginning from the empirical &quot;ground&quot; upward. This &quot;upside-down\ntree&quot; defines philosophical modernity. Jean-Paul Sartre wrote that the whole of\n<i>Existentialism</i> and 20th century philsophy is a mere subset, and never escapes Continental Materialism, as argued\nin Sartre&#39;s\n<i>Search for a Method</i>.\n<sup>3</sup>\n</p>\n\n<p>All of the Sciences, prodded by this Truth of Empiricism, followed suit through all the tech innovations since Hegel.\nI&#39;m so surprised by this, because for me, the role of cryptography is shocking on two levels. First, cryptography\nresemblees philosophy rather than the Empiricism that I had envisioned would govern social rule (Some once thought\nnuclear sciences held this role--no longer! Mathematics takes the crown. Secondly, I&#39;m still dumbfounded that\na Paradigm Shift\n<i>first</i> offers the tools to fulfill itself? Staggering to consider the arbitrary changes ahead for a society that\nis provided the tools of social structural change first, but how quite convenient!</p>\n\n<p>\n<strong>II. Bureaucratic Atomization in a True Sharing Economy</strong>\n</p>\n\n<p>It is satisfyingly reassuring to see the good-natured, altruistic efforts among the thousands, upon thousands of\nopen-source volunteers, and blockchain innovators, like Vitalik Buterin author of Ethereum Virtual Machine, whose\naims and efforts make staggering progress each quarter. The potential for removing the &quot;middle-person&quot;\nfrom the day-to-day, micro-economic &quot;cost of living&quot;. This goes for for the exchanging of titles, legal\ndocuments, etc.</p>\n\n<p>Sharing of Resources is, in my personal opinion, critical to global future--both out of increasing necessity in allocating\nincreasingly limited resources; an arbitrary rearrangement of\n<i>Social Structure</i> and distribution of its resources. While the exponential population growth looms on the near\nhorizon, a clear, pre-existing solution begins with a focus on\n<i>smart</i>, effective sharing of resources. The driving principle of sustainability is made convenient by means of\nblockchain technology, extending for example to local economies, cooperatives, ride-sharing, etc.</p>\n\n<p>\n<strong>III. Removing Double-Dipping from International Remittances </strong>\n</p>\n\n<p>\n<i>&quot;Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.&quot;\n  </i>\n<br /> --Antoine de Saint-Exup&eacute;ry, 1939</p>\n\n<p>Taxes and tariffs are difficult enough, the double-dipping of the current international remittance system, &aacute;\nla Western Union, does not reflect the global, sharing Economy of 2018. The existing remittance system (not speaking\nto\n<i>centralized</i>, middle-man alternatives like PayPay, etc.)--supposing if I wire $2 Loonie to a Canadian friend&#39;s\nCanadian Bank--requires payments executed through two separate bank transactions in two national payments systems,\nthus the sending country and receiving country each take a cut. Like everything else--c&#39;est la vie. Or is it?\nThe beauty of Ethereum is that it &quot;talks&quot; well with others and across borders, while Bitcoin remains of\nlittle use for micro-transactions that involve semi-basic calculations. The reason being that Bitcoin blockchain\nlanguage, Script, cannot support loops (while statements, etc.)</p>\n\n<p>Currently, both EOS and Ethereum blockchains appear poised for the most financial-friendly blockchain tech.</p>\n\n<p>1.\n<a href=\"https://www.economist.com/news/business/21722869-anti-establishment-technology-faces-ironic-turn-fortune-governments-may-be-big-backers\"\n  target=\"_blank\">https://www.economist.com/news/business/21722869-anti-establishment-technology-faces-ironic-turn-fortune-governments-may-be-big-backers</a>\n</p>\n\n<p>2.\n<a href=\"https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/\" target=\"_blank\">https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/</a>\n</p>\n\n<p>3.\n<a href=\"http://www.bard.edu/library/arendt/pdfs/Sartre-Search.pdf\" target=\"_blank\">\n  <i> Search for a Method</i>, Jean-Paul Sartre, 1957</a>.\n<br />\n<small>Sartre would later be awarded the Nobel Prize in 1964, but declined it.</small>\n</p>\n\n<p>\n<a href=\"https://projektintegracija.pravo.hr/_download/repository/Kuhn_Structure_of_Scientific_Revolutions.pdf\" target=\"_blank\">4. Kuhn, Thomas, The Structure of Scientific Revolutions, </a>\n</p>\n\n<p>\n<a href=\"https://hbr.org/2017/01/the-truth-about-blockchain\" target=\"_blank\">5. Harvard Business Review,\n  <i>The Truth about Blockchain, Feb. 2017. (This is an older article, but very clear &amp; insightful)</i>\n</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-20\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">&nbsp;</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 20, 2019</h6>\n\n<h6 class=\"chapternumber dailytitle\">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part IV:\n<br />\n<br /> Seven Features of the New Blockchain Micro-Economy\n<br />\n<small class=\"jargon\">Tech jargon alert ahead, with all effort made for clarity! The 4th through 7th outlined Features of the New Blockchain\n  Micro-Economy</small>\n</h6>\n&nbsp;\n\n<p class=\"firstparagraph\">I feel that data is one of the more underestimated new commodities of the age. Most visualize data as rows and columns,\nand at most only non-conditional dynamic data. Data are not so mute! Data, in most object-oriented languages at\nleast, represents\n<i>functions</i>, conditions, and predicted values. And so, our own behavior, coupled with our networks&#39; behavior,\ncoupled with predictive analytics--this represents a wealth of information beyond our attributed or inherited traits.\nThe programming is\n<i>in</i> the data, however, citizens have become less and less involved, ceding app by centralized app our own information\nand ensuring profit to 3rd party marketers. The centralized nature of the internet allows for this, while the new\nlandscape of\n<i>decentralized applications</i> (DAPP) completely upends this structure of the status quo.</p>\n\n<p>\n<strong>IV. Enabling citizens to own &amp; monetize their data (&amp; protect privacy)</strong>\n<br /> Ethereum offers a decentralized solution to &quot;owning&quot; one&#39;s own data, as data can be decentralized\nand returned to the individual&#39;s control, and\n<i>profit</i>. As sure as the 19th century&#39;s &quot;labor-hour&quot; became commodified to a calculable asset, i.e.\nproperty, which\n<i>another</i> party controls and makes profit; And as sure as the 20th century&#39;s data analytics became commodified\ninto calculable assets for another party to take control and make profit; then only now in this 21st century does\ntechnology offer a new, more egalitarian path.</p>\n\n<p>\n<strong>V. Ensuring compensation for the Creators of Value </strong>\n<br /> So, how would decentralized innovations of blockchain\n<i>distributed ledger</i> technology compensate those whose actions, behavior, opinions, friend-networks, artwork,\nmusic, videos and other contributions profit the creator?</p>\n\n<p>\n<strong>VI. The Halcyon Age of Transaction-Chain Enterprise</strong>\n</p>\n\n<p class=\"quote\">According to Greek Mythology, the days of eery, noticeable lack of storms have never been interpreted as a period\nof grace. Moreso,\n<i>Halcyon</i> tranquility only means a temporary moratorium on the winds and waves, imposed by Aeolus, God of Wind,\nto protect the nesting eggs of Alcyone, his daughter.</p>\n\n<p>If blockchain tech changes how we do research, analysis, and forecasting, as much as it changes international, and\ncross-industry transactions, then are we faced with a similar dilemma as the &quot;novelty&quot;, and double-dealing,\nof multi-nationals of the 1990s? No, because blockchain renders organizations, even those with a spotty past, into\ntransparent, democratic, efficient, secure and easily scrutinized.</p>\n\n<p>After all, without transparent proof, how else would I know my bananas are the &quot;pura vida&quot; Costa Rique&ntilde;\nones? More importantly, what was the carbon footprint of that banana&#39;s journey from its native soil to my breakfast\ntable? New blockchain companies like\n<a href=\"https://www.provenance.org/\">Provenance.org</a>,\n<a href=\"http://www.skuchain.com/\" target=\"_blank\">skuchain</a>,\n<a href=\"http://www.blockverify.io/\">http://www.blockverify.io/</a> are a few noticeable game-changers. So, for bananas not backed by mathematical proofs,\nI really have to ask myself, is it\n<i>really</i> an authentic Fair Trade banana?</p>\n\n<p>Transactions are hardly valuable in the products themselves, if removed from the value of the\n<i>transaction per se</i>. International supply chain transactions, by virtue of a recently possible decentralized,\npermanent record and monitoring, have begun to make inroads in agriculture, petroleum, pharmaceuticals, food-supply\nand other multi-stage industries.</p>\n\n<p>If corporate and governmental transactions are to be made public--many bearing enterprise or State secrets, then\nwill forecasting also go the way of birds? Possibly. Online platforms like Augur\n<sup id=\"20-8\">8</sup>are creating global, decentralized prediction markets, in domains like sports betting, financial markets\nspeculation and so forth. Armed with vast, transparent knowledge, the everyday person can now access the whims and\npower of Aeolus, and forecasting the winds of Fortune.</p>\n\n<p>\n<strong>VII. Reinventing Government &amp; Democracy</strong>\n<br /> ...to be completed...</p>\n\n<p>1.\n<a href=\"https://www.provenance.org/\" target=\"_blank\"> https://www.provenance.org/ </a>\n</p>\n\n<p>2.\n<a href=\"http://www.skuchain.com/\" target=\"_blank\"> http://www.skuchain.com/ </a>\n</p>\n\n<p>3.\n<a href=\"http://www.blockverify.io/\" target=\"_blank\"> http://www.blockverify.io/ </a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-21\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Data Analysis Musing</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 21, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">Facebook-Friendly Third-Generation Data Structures</h6>\n\n<p class=\"firstparagraph\">Today, I&#39;m going to write about data structures, and challenges that face Vitalik Buterin and other blockchain\narchitects. &#39; Now, why in the\n<i>world</i> would I or anyone else care about ooh, merge sorts, bubble sorts, classificatory trees, and the advent\nof a third form of data structure?</p>\n\n<p>Today, we live in an ever more relational world. With all our technology, we just can&#39;t wait to hear the latest\ngossip about sister Becky&#39;s Boyfriend&#39;s Brother&#39;s Friend that\n<i>also</i> got to meet Shakira. Gossip to one person is a valuable asset to the data analyst. Because, how else could\nan algorithm draw simultaneous conclusions about two friends that &quot;liked&quot; the same Samsung VR, and that\nthey are both located near Best Buy. Thanks to classificatorial wisdom of AI &amp; plain machine-learning?</p>\n\n<p>These relational queries are simply too difficult for relational, row &amp; column SQL data structures. In fact,\nmany queries are impossible, due to unprescient database schema architectures. Next, with the need to &quot;objectify&quot;\ndata into non-relational objects, rather than an antiquated, rigid row-and-column design. Thus, the second major\ntype of data structure is more flexible and adept in finding these relational queries that are ever more in vogue.\nHowever, the crystal-like, pristine non-relational, No-SQL designs quickly turn to spaghetti, and are poor for scalability.\nBetween a rock and a hard place, a third data structure has emerged in recent years.</p>\n\n<p>Graph Data Structures\n<sup>2</sup> allow data queries that had otherwise been impossible to capture in an entity relationship diagram. The\nideal example to clarify is the manner that the Swiss banks&#39; accounts were discovered to be hiding vast amounts\nof hidden taxes, etc. The cover-up was so well-constructed that not until new, graph database queries discovered\npatterns of money flow\n<sup>1</sup>:</p>\n\n<p class=\"quote\">The data was then turned into a graph format to detect then fine-tune the connections between the nodes. The Swiss\nLeak held around 60,000 files that contained information about over 100,000 clients in 203 countries, which means\nthat the resulting graph database had more than 275,000 nodes with 400,000 relationships among them.</p>\n\n<p class=\"quote\">By being able to easily visualise the networks around clients and accounts, the reporters found many more connections\nthan they had before, which lead to the Swiss Leaks revelations soon being shared with the public and regulators\nacross the globe.</p>\n\n<p>And you thought that plagiarism-detecting software was impressive for complexity! The beauty of this newly available\nsoftware (even Microsoft jumped on board in recent years) means that sociologists, economists can begin to make\nbetter headway in the way that our many interactions become more complex with more data. Remember, in the past ten\nminutes, more data information was just produced than most of human history! Thus, new and upcoming needs in domains\nlike content management &amp; access control, geo-routing (public transportation), gene sequencing, bio-informatics,\nand so on. So, as technology takes us forward, and we make our considerations, let&#39;s stick by the golden rules\nof parallel processing, scalability, and, now, graph-network mindedness for the new data structures, and schema,\nof the Era!</p>\n\n<p>1.\n<a href=\"https://www.globalbankingandfinance.com/how-a-graph-database-unearthed-major-financial-improprieties/\"\n  target=\"_blank\"> https://www.globalbankingandfinance.com/how-a-graph-database-unearthed-major-financial-improprieties/ </a>\n</p>\n\n<p>2.\n<a href=\"https://neo4j.com/blog/analyzing-panama-papers-neo4j/\" target=\"_blank\">By being able to easily visualise the networks around clients and accounts, the reporters found many more connections\n  than they had before, which lead to the Swiss Leaks revelations soon being shared with the public and regulators\n  across the globe. </a>\n<br /> Other major vendors in graph data structures based on Neo4j: OrientDB, ArangoDB, Titan, mongoDB, Complexible Stardog,\nand Franz AllegroGraph.</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-21\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 22, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">Languages</h6>\n\n<p class=\"firstparagraph\">While I&#39;ve had blockchain-related topics on the mind lately, it seems I can&#39;t escape it as I broach new fields--blockchain\nis everywhere! Well, I had begun my blog with intentions about the accelerated speed of language and syntax formation,\nand the curious phenomenon I&#39;d call, for lack of a better word or or my own reading, &quot;declarative-syntax-merging&quot;.\nThis involves the curious, and largely unknown, growth of JavaScript scripting language into almost every domain\nof web apps, data analysis, and even the bounds of\n<i>Logic</i> itself. Though I won&#39;t submit my readers to a history of a language, suffice it to say that, &quot;If\na certain algorithm, device, or object is programmable, then it will eventually be programmed in JavaScript.&quot;</p>\n\n<p>Without getting into technicals, I&#39;ll instead use a perfect metaphor--the manner by which English merged with\nFrench, beginning with the conquests of William of Normandy, around 1096 onward. Almost a thousand years later,\nwe can see how English grammar inherited it&#39;s Anglo-Saxon Linguistic roots, along with the core vocabulary;\nThen, as English vocabulary moves past the first few thousand core words, e.g. &quot;milk&quot; or &quot;house&quot;\nfrom &quot;melche&quot; or &quot;haus&quot;, then more than 70% of English Vocabulary is directly inherited from\nFrench, e.g. &quot;lactose&quot; or &quot;mansion&quot; from &quot;lait&quot; or &quot;maison&quot;.</p>\n\n<p>Similarly, the language of the web and original browsers, JavaScript, has similarly morphed into a new language called\nSolidity, but in only a micro-fraction of English&#39;s time. The usual FOMO logic propels coding language use,\nfor example FOMO induced Microsoft&#39;s flagship Text Editor, Visual Code, to adopt it years ago.\n<sup id=\"22-1\">1</sup> The language of Ethereum Blockchain is Solidity, which like the above example, has two parents, one non-legitimate.\nIt is in all respects totally JavaScript, yet with object-oriented elements of C++. For the layperson, let&#39;s\njust say Solidity resembles a &quot;Liger&quot;, in it is at it&#39;s core JavaScript, yet with increasing sophistication\nbased on C++ logic, its head and torso has begun to resemble the powerful machine-code of C++ ever more. And it\nis a beautiful, but curious phenomonenon.</p>\n\n<p>\n<a href=\"http://www.ibtimes.co.uk/microsoft-adds-ethereum-language-solidity-visual-studio-1552171\" target=\"_blank\">http://www.ibtimes.co.uk/microsoft-adds-ethereum-language-solidity-visual-studio-1552171</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-23\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Sociology Tomorrow!</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 23, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">1.4 Million Reasons for more Women in Tech</h6>\n<a href=\"#18-03-08\" rel=\"stylesheet\">Blog addressed again March 8, 2018 </a>\n\n<p class=\"firstparagraph\">1.4 million\n<i>new</i> jobs by 2020; End over end, year after year, the computer programming industry continues to add another\n20% more jobs each year, for the next five years. This is the only field that demand outstrips the supply--and increasingly\nshort supply. So much so, the US Department of Labor forecasts U.S. citizens will be able to fill 39% of those positions;\nthere are not enough Immigration visas (especially in the Trumpian era of isolationism) to make up the rest.</p>\n\n<p>&nbsp;</p>\n\n<p>So, how is it that only 14% of females in the entire field of cybersecurity? Silicon Valley is, at its best, obscenely\none-sided. At Google, only 17% of the company&#39;s tech jobs are filled by women. Facebook women staff only 15%\nof tech jobs, and Twitter? 10% female. The figures on women in computer science across the nation, across the entire\nindustry are not improving, but\n<i>declining</i>?\n<sup>1</sup>\n</p>\n\n<p>Of course, we&#39;ve heard these statistics from any given headline, and in the halls across the university landscape,\nstarting with Women in STEM (Science, Tech, Engineering, Mathematics) programs.\n<sup>3</sup> Yet, why, with so much money, so many programs, so many non-governmental, non-profit effort?</p>\n\n<p>I argue that tech\n<i>climate </i> is directly to blame. Who then? Not a person, but principles are to blame. Culture--often defined as\nshared beliefs, norms, language and behaviors--can hardly be changed, but it can be understood.\n<br /> There is a book, called &quot;Program or be Programmed\n<sup id=\"24-4\">4</sup>\n</p>\n, by which the author explains social consequences of a dichotomized society--between those that manipulate the environment\naround them, whether automating tasks at work, or simply fixing a simple software bug, by adding a comma. This literacy\nof the Current Era is akin to the 26-letter alphabet of written sentences and paragraphs, and--not to be taken for\ngranted--is the exclusive form of communication, outside of a 100-foot perimeter, up until 150 years ago. Knowledge\nis not power, the communication of knowledge is power.\n\n<p>&nbsp;</p>\n\n<p>I argue that today, the power is to program one application programming interface (API) to talk to another API. In\nother words, the ability to directly communicate with software at the command-line is not now a requisite skill,\nbut promotions would not escape this necessity! So, now reverting back to the subject of women in tech, American\nleadership is in deep peril without more female insight. I will finish by citing that Ares, the violent, untamed\nGreek\n<i>god of war</i>, cannot always drive the Capitalist engine; because She, Athena, the\n<i>goddess of intelligence</i> represents true strategy!</p>\n\n<p>1.\n<a href=\"https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html\" target=\"_blank\">https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html</a>\n</p>\n\n<p>2.\n<a href=\"https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages\" target=\"_blank\">https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages</a>\n</p>\n\n<p>3.\n<a href=\"https://www.aauw.org/research/why-so-few/\" target=\"_blank\">https://www.aauw.org/research/why-so-few/</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-24\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Web Dev Affairs</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 24-25, 2018\n<br /> Weekend\n</h6>\n\n<h6 class=\"chapternumber dailytitle\">Joys of Automation</h6>\n\n<p class=\"firstparagraph\">While coding up a better shell for this website, I thought it&#39;s remarkable how our lives get easier and easier\nwith each passing year of tech. Using JavaScript--the primordial web-coding language--I marvel at the convenience\nof delegating mundande coding stuff to taskrunners, like\n<i>Gulp</i>--a programmable package manager that &quot;bundles&quot; up the libraries to be used in the app. It is\ntruly a joy!</p>\n\n<p>I write four styling\n<i>functions</i>, with about 16\n<i>variables</i> and voil&agrave;! I finish in 3 hours what would have taken me 15 hours, then another 5 hours a month\nfor upkeep. Instead, now, it&#39;s as though I wind up the clock, and need only periodically check, and perhaps\nupdate a variable or two ... Technology. I&#39;m gushing for joy.</p>\n\n<p>This was mere JavaScript--with a truly\n<i>Turing Complete</i>--pan-algorithm status--languages, the possibilities are 100-fold with Python language library\ncollection; this library collection includes NASA modules, mathematical proofs, and limitless uses from web-scraping\nfor unstructured data to an excellent data visualization collection. Sometimes I feel like I&#39;m in the Library\nof Congress, and better yet because, PIP, the Python package manager acts and automates like a cyborg librarian,\nfor lack of better imagery.</p>\n\n<p>I just have so much joy watching a project come to life, and it&#39;s even a greater delight if this project comes\nto life and stays alive, through the joys of automation!</p>\n\n<p>&nbsp;</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-26\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 26, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">Cryptocurrency&#39;s Cumbersome Carbon Footprint</h6>\n\n<p class=\"firstparagraph\">I must confess that on the very day that Our Daily Tech Blog gets an under-the-head make-over for security&#39;s\nsake, I wrote the new formatting file right over today&#39;s post. Amazing, and the two occurred nearly simultaneously\nas I worked on them, their paths crossed and poof, gone! Same platform, and I paid the price! Whether I change my\nways is yet to be seen, but I shall continue with my original theme for the day, namely, Sustainability, a.k.a.\nCarbon Footprint.</p>\n\n<p class=\"quote\">Power consumption is one of the major costs of bitcoin mining, as dedicated machines crunch the algorithms that build\na record of every single bitcoin transaction and are rewarded with tiny fractions of a bitcoin for their efforts.\n<sup id=\"explain\">1</sup>\n</p>\n\n<p>Today I have a mild Critique and Praise for the blockchain sustainability problem caused by sky-high electricity\nbills! Computer algorithms do waste electricity, not like your Widescreen. More electricity is gobbled up by small\nand large mining operations in nearly every country than small nations!\n<sup id=\"electricity\">1</sup>. Ethereum, Bitcoin and a handful of other &quot;Proof-of-Work&quot; designs require electricity because\nthe investment in equipment itself is investment, but more importantly, two-way incentivation for mining drives\nthe system, and the scarcity demand through difficulty computations.</p>\n\n<p>So, is the electricity consumption really\n<i>correlated</i> with the value, scarcity, of the currency? Yes. Digiconomist--a cryptocurrency analysis site\n<sup\n  id=\"digiconomist\">3</sup> estimates\n  <i>each</i>Ethereum transaction represents a 45 Kilowatt-hour of electricity&#39;s mining. (A visa credit card transaction\n  is 0.00651 kWh. The entire Ethereum global blockchain could be &quot;using as much as 4.2 Terawatt-hours (tWh),\n  or slightly more than the country of Cyprus\n  <sup id=\"cyprus\">1</sup>.&quot; So, electricity comparisons are telling, but how does this relate to its environment impact, sustainability\n  itself?</p>\n\n<p>Carbon Footprint, our energy consumption index, can be compared to another element of scarcity, which dictates fluctuations\nin value: Gold. According to\n<i>Digiconomist</i>, an average household&#39;s Carbon Footprint is about 10 tons of CO2 per year. The article does\nthe math for us very succinctly:</p>\n\n<p class=\"quote\">On top of this, we can find that the process of mining Bitcoin isn&rsquo;t just more energy-intensive, but also has\na bigger environmental impact. To reach that conclusion, we first need to estimate the carbon footprint for both.\nFor Bitcoin we can, again, get this number from the Bitcoin Energy Consumption Index. For gold, we assume a carbon\nfootprint of 20 tons of CO2e per every kilogram of gold mined\n<sup id=\"digiconomist2\">3</sup>.</p>\n\n<p>The article continues to clarify that 33,000 kilograms of CO2 per unit mines (comparatively, one Bitcoin&#39;s worth\nof Gold is 4,000 kilograms of CO2). At the end of the day, the electricity costs--if not sustainable long-term--could\nspell trouble. Hence, the three S&#39;s, mentioned last, sustainability is perhaps a larger issue than blockchain\nSecurity and Scalability challenges. Again, this is a problem that the third largest cryptocurrency does not have:\n<i>Ripple</i>, which does not bear a carbon footprint\n<sup id=\"ripple\">4</sup>.</p>\n\n<p>&nbsp;</p>\n\n<p>0.\n<a href=\"https://www.cnet.com/how-to/bitcoin-ethereum-or-litecoin-which-cryptocurrency-is-best-for-you/\" target=\"_blank\">https://www.cnet.com/how-to/bitcoin-ethereum-or-litecoin-which-cryptocurrency-is-best-for-you/</a>\n<br /> For those new to cryptocurrencies, this is a fairly succinct article to cryptocurrencies, and their underlying\nstructure.</p>\n\n<p>1.\n<a href=\"https://motherboard.vice.com/en_us/article/d3zn9a/ethereum-mining-transaction-electricity-consumption-bitcoin\"\n  target=\"_blank\">https://motherboard.vice.com/en_us/article/d3zn9a/ethereum-mining-transaction-electricity-consumption-bitcoin</a>\n</p>\n\n<p>2.\n<a href=\"http://www.wired.co.uk/article/how-much-energy-does-bitcoin-mining-really-use\" target=\"_blank\">http://www.wired.co.uk/article/how-much-energy-does-bitcoin-mining-really-use</a>\n</p>\n\n<p>3.\n<a href=\"https://digiconomist.net/bitcoin-mining-more-polluting-than-gold-mining\" target=\"_blank\">https://digiconomist.net/bitcoin-mining-more-polluting-than-gold-mining</a>\n</p>\n\n<p>4.\n<a href=\"https://ripple.com/xrp/\" target=\"_blank\">https://ripple.com/xrp/</a>\n</p>\n\n<p>&nbsp;</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-27\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Web Dev Affairs</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 27, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">After Yesterday&#39;s Scathing Post, A Look at my own Carbon Footprint</h6>\n\n<p class=\"firstparagraph\">In my reflections about environment sustainability issues, I confess I&#39;m sort of a hypocrite ... The whole matter\nthat caused my own introspection begins with my usual daily vexation: Tangles of wires!\n<br /> &nbsp; ... I&#39;ve been having electricity issues, here as of late ...</p>\n\n<p>On one side, my tiny Yoga Ultrabook usually likes to charge just fine with my phone charger--if I&#39;m stuck without\nmy charger. And due to an untimely end to the charger, I needed a replacement. So, singular errand of the day was\na trip to Best Buy to peruse for a 45-Watt USB-C charger ( the new oval charging port on Samsung 8&#39;s, LG G6&#39;s\nand newer Apple products).</p>\n\n<p>Meanwhile, my credit-card sized Raspberry Pi computer runs on an old-school USB charger--a whole Linux Server Tower\non a cell-phone charger. Then, we have my trusty Dell (actual) Tower with 16 Gigs of RAM, 2-terabytes, etc. that\nalso seems to need an extra fan to stay cool--probably the sustainability of 100 Raspberry computers. My entire\ncarbon footprint changes more with the electrical products that I use, than my vehicle! Well, I also confess my\nJeep Cherokee can&#39;t even boast 20 miles per hour ... oops, conscience pangs, ouch ... Well, hypocritical, slightly,\nbut found not guilty since I&#39;m a bike-commuter for life!</p>\n\n<p>&nbsp;</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-28\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 28, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">One Last Word about Bitcoin&#39;s Carbon Footprint</h6>\n\n<p class=\"firstparagraph\">Environmental Sustainability, again, and a higher-level view of the dilemmea...I couldn&#39;t resist:\n<br /> Bitcoin&#39;s Initial Coin Offering was 2011 or so, then Ethereum, with Ether for currency was 2015; These two,\never so prescient designs, also have their Achilles Heal. These two are\n<strong>&quot;Proof of Work&quot; currency algorithsms</strong>. This means that the &quot;Demand&quot; side of supply-and-demand,\nderives from\n<i>difficulty levels</i> of crypto-blocks to mine. So, miners are incentivized to spend $1500 on a semi-mediocre-good\nmining rig (which is basically 20 NVIDIA Graphics Cards tied together to stack of two-by-fours with lots of fans\n... erhem, sustainability?...</p>\n\n<p>And for each block that is &quot;solved&quot;, hence the block being validated, and somebody&#39;s cryptocurrency\npurchase/transaction is resolved! (takes about 12 minutes for the whole global blockchain to cycle, and Ethereum\nis less than a minute). So, the whole cycle continues, churning through coal- and carbon-stained hands of the electricity\nfed to these crypto-mining rigs\n<sup>1</sup>. For many it&#39;s a hobby, like the British Hobbyists&#39; love for ham- and short-wave radio setups, yet\nthis profitable, yet particular hobby resembles the 1870&#39;s coal factory smoke stacks in South London!</p>\n\n<p>Let&#39;s face it, if Ethereum is able to successfully hard-fork to a Proof-of-Stake system soon--and Vitalik Buterin\nand his crew assure us it is coming\n<sup>2</sup>--then great--problem solved, everything eventually converts to Ethereum. If\n<i>not</i>they face an existential threat. Because, in a more enlightened ten years from now, those mining depots\n<i>would</i> look like unfettered factory smoke-stacks. Proof-of-Stack, whose currency value is not set to difficult\nof algorithm puzzle (hence,\n<i>proof-of-work</i>, but rather to ownership of &quot;voting pools&quot;, which is a\n<i>\n  <strong>Consensus-Based Blockchain algorithm</strong>\n</i> [Complex subject best reserved for a rainy day, or better yet, no day! I may revisit this alternative in a funner\nway, here&#39;s a glimpse from Vitalk&#39;s @VitalikButerin tweet yesterday:</p>\n\n<p class=\"quote\">Question for mathematicians: is there a assumed-to-be-normal number (ie. digits are random, like pi or e) where you\ncan calculate the nth digit in log(n) (or even polylog(n)) time? If so, then H(x) = digits[x ... x+100] seems like\nit would be a cool cryptographic hash algo.</p>\n\n<p>Now, I am by no means a detective, but by the sound of those tweets, the Proof-of-Work algorithm seems to still be\nof utmost importance ...</p>\n\n<p>1.\n<a href=\"https://blockexplorer.com/news/ethereum-launches-casper-testnet-paving-way-proof-stake/\" target=\"_blank\">https://blockexplorer.com/news/ethereum-launches-casper-testnet-paving-way-proof-stake/</a> and also,\n<a href=\"https://www.trustnodes.com/2017/11/28/ethereums-proof-stake-casper-testnet-nears-launch\"\n  target=\"_blank\">https://www.trustnodes.com/2017/11/28/ethereums-proof-stake-casper-testnet-nears-launch</a>\n</p>\n</div>\n\n<div>\n<p id=\"pageend\" style=\"padding-bottom:150px;\">&nbsp;</p>\n</div>\n<button><a href=\"#top\">Top of Page</a></button>\n";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	console.log('blog-feb-loader');
	document.getElementById("blog-feb").innerHTML = "\n\n\n<hr />\n<button id=\"febtop\">TOP</button> \n<br />\n<h4>POSTS FEBRUARY 2018</h4>\n<br />\n<h6>First Blog Post!</h6>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-10\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 10, 2018</h6>\n\n<h6>First Blog Post!</h6>\n\n<h6 class=\"chapternumber dailytitle\">Why are Sociologists now the Key Players in Data Analysis within the Domain of Blockchain Technologies?</h6>\n\n<p class=\"firstparagraph\">First, let me describe that blockchain technologies, i.e. Government contracts, Business contracts, Bitcoin and other\ncryptocurrencies, all rely on network graph theory, both on the low-level programming technology (peer-to-peer global\nip networks) across the spectrum to high-level interfaces for institutional, corporate, individual needs and uses.\nThese blockchain &quot;network&quot; analyses depend on highly variable--and simultaneous--network changes, node\nchanges, and link changes; and, the latter three may arbitrarily change interdependantly or not.</p>\n\n<p>Therefore, blockchain technologies must first accomodate complex node variables for contracts (relationships) that\ninclude arbitrarily hierarchical mappings and conditional data structures. Secondly, blockchain tech must face analytical\nchallenges that arise from informal practices\n<sup>1</sup>, by which the organizational nodes (employees) choose to deviate from the employee role&#39;s protocol for\nthe sake of efficiency, convenience, company culture, and multiple other levels of human factors.</p>\n\n<p>Sociologists Meyer &amp; Rowan&#39;s (1977)\n<i>New Institutionalism</i> explains how employees change practices and decouple\n<i>actual</i> organizational structure from recorded rules, as a function of organizational size, time, convenience,\netc. These continually new, unknown constraints on data must be intimately understood, non-algorithm human understanding\n<i>by at least one side </i>of the exchange. How do we recognize unwritten, soft rules and behaviors of a bank, a person,\nor a company&#39;s internal bot?</p>\n\n<p>The hard sciences domain of Software Engineering, Computer Science, and Mathematics have brilliantly brought the\nworld the blockchain tool, for which the Hard Sciences can only contribute little on how to interface with social\nneeds. Ask yourself, how well do 1,000 top blockchain-related programmers understand the multi-dimensional layers\nof hierarchical social, corporate, and governmental relationship networks? Well enough to differentiate qualitative\nmeaning in the smart-contract? Fearfully, no.</p>\n\n<p>In the past, the layers of abstraction from raw technological tool to societal use was refined, improved, integrated\nthrough multiple layers of &quot;middlemen&quot;, such as lawyers, corporate lawyers, government institutions, non-governmental,\nnon-profit and for-profit actors. Blockchain technology, by its very nature, erases the middlemen. Suddenly, one\nprogrammer, for example, is writing the same healthcare insurance crypto-contract, that last month an entire team\nof hospital employees spent a month writing; then overseeing and managing different facets of this same thing.</p>\n\n<p>However, the crypto-contract, once deployed to the blockchain, auto-manages the rest, forever or for the life of\nthe contract. Therefore, rather than redoing the trials and errors of 200 years&#39; Sociology Network Analysts&#39;\nresearch and analytical development. Therefore, medical and other social fields cannot and should not turn to the\nHard Sciences for solutions. These Med researchers and developers are already at home, safe within the academic\ndomain of the Raw Sciences of Medical Sociology, Public Health, and so on. The next ten years of blockchain technology\ncan either be defined by unwitting, piecemeal advances, accompanied by frequent, non-improving distastrous crises.\nOr, the next ten years can follow Sociology&#39;s Scientific Method toward a mildly turbulent, but stable and beautiful\nfuture.</p>\n\n<p>Examples aside, the primacy of the Sociology academic field in the early 21st century quickly becomes apparent on\nreview of the Sociologists&#39; specialization in network theories imbued with symmetrical and asymmetrical relationships,\nwithin social networks that change arbitrarily the direction, conditions, and values of those same relationships.\nWe Sociologists deal with real-time, logical and hierarchical network mappings that appear arbitrary, yet are characterized\nby fixed patterns.</p>\n\n<p>No other academic field than sociology has advanced into the details, and endless network rabbit-holes that characterize\nsocietal behavior. Not until this second millenial decade could the marriage of Large Number Statistical Theory\nbecome consumated with the brilliance of early 1900&#39;s Sociological French Network Theories, like Maurice Halbswach&#39;s\nwork on the clearly defined network patterns of a society&#39;s Collective Memory.</p>\n\n<p>No other academic field has collected and refined knowledge on network arbitrariness, such that Economic&#39;s &quot;irrational\nbehaviors&quot; and Mathematical &quot;complexity models&quot; do not\n<i>touch to the bone</i> the meaning, the intersectionality of network analysis, which must incorporate simultaneous\nnode changes (person gets job /or/ does not get job), network changes (All get jobs /or/ only 3 of 15 network groups\nget jobs), and most importantly the\n<i>relationship</i> changes (all jobs always useful /or/ half of job groups no longer useful) across time and fixed.</p>\n\n<p>Fine. So, why is Sociology&#39;s network theory so valuable beyond just the network insights gleaned from 19th and\n20th centuries&#39; network problems? Follow: European sociology came of age in the analog social era, while North\nAmerican Sociology only recently come of age (Quebec in the 1960&#39;s [post-1968], U.S. in the 1990&#39;s[post-1999],\nin the digital social era. Therefore, the problem-solving patterns of past sociology are inherently small-data and\nmore qualitative analysis, and thus only Sociology incorporates &quot;human-ness&quot; into the billion rows and\ncolumns of quantitative--numbers-only--analysis.</p>\n\n<p>For example, Oxford-developed S.I.E.N.A. Software accomplishes this task. SIENA--named for Simulation Investigation\nfor Empirical Network Analysis--software calculates the real-time values, direction, and conditions of each relationship\n(link) in a network, simultaneously as each node, network, or alter-link changes or is changed; with this, it is\npossible to isolate directional, conditional\n<i>influence change</i> in real-time. Real-time sounds impossible, however, the SIENA documentation\n<sup id=\"9one\">2</sup> describes its program algorithm to the statistical analysis of network data, with the focus on social networks.</p>\n\n<p>An easy example to grasp this is the concept of whether a person\n<i>self-selects </i>(e.g., due to subconscious leanings) into a group and thus matches to fruition the group&#39;s\nbehavior with little group influence? Or does this same person join a group and emulates the group&#39;s behavior,\nby the group&#39;s influence over time. Sociological network analysis, using Snjder&#39;s SIENA software, achieves\nthe impossible with the closed, directed graph networks that characterize blockchain technology. The network graph\ncan be here understood as entire (complete) networks (i.e, the blockchain in its entirety without hard forks), not\nas personal (egocentered) networks: Using this SIENA model allows for the necessary assumptions that a set of nodes\n(social actors) is given, and all ties (links) between these nodes are known - except perhaps for a moderate amount\nof missing data</p>\n\n<p>If, and only if, this level of analysis may be achieved, the blockchain development may follow a linear, directed\npath of maturity with social and world needs. Until that time, that Sociology Network Theorists are called upon,\nblockchain developers will continue to bat their arms in the dark, stumbling over again the same bugs. Sadly, this\nsemi-opaque future implicates the same fate as those that attempt to use blockchain for their currency, contract,\nand other societal needs--in this case, the blind will indeed lead the blind.</p>\n\n<p class=\"footnotes\">1.\n<a href=\"http://www.journals.uchicago.edu/doi/abs/10.1086/226550\" id=\"9one\" target=\"_blank\"> http://www.journals.uchicago.edu/doi/abs/10.1086/226550</a>\n<br />\n</p>\n<p>\n2.\n<a href=\"https://www.stats.ox.ac.uk/~snijders/siena/\" id=\"9one\" target=\"_blank\"> https://www.stats.ox.ac.uk/~snijders/siena/</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-11\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Web Dev Affairs</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 11, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">How Can We Best Modularize our App Designs in Order to Achieve the Much Vaunted &quot;Separation of Concerns&quot;?</h6>\n\n<p class=\"firstparagraph\">There was once a time for App Developers that our habits followed our inner-philosophers--as an Esteemed Order of\nCoders--we held ourselves in the highest regard to separate form from function, and style from structural design.\nHence, in the early 2000&#39;s, a tri-partite, sensible world guided every web coder to abide by The scaffolding\nof HTML, functionality of JavaScript, and styling of CSS. A decade later, we must throw out this antiquated division\nof labor within web coding.</p>\n\n<p>Library modularization, (think JQuery, JSX, Bootstrap, etc.) within Javascript ES16 reveals that modules and components\nMust hold together CSS/HTML/JS, part by part. So, if a decade ago three teams handled html, js, css, it is now requisite\nto divide up 3 teams to 3 components (a team for the carousel widget, a team for the navigation widgets, and\n<i>\neach</i> of these component teams\n<strong>must</strong> be maintained together, not separately, the module&#39;s required html, js, css.</p>\n\n<p>This means that the new Division of Labour can no longer follow past patterns from 5 years ago. Otherwise, any and\nall coding will necessarily begin to &#39;reinvent the wheel.&#39; This is because any module, any library you go\nto, will\n<i>already</i> have its HTML pre-configured, JS pre-configured, CSS pre-configured. Thus, attempts to extricate new\ncss from one module to another (or worse yet, sharing css of modules), will only invite eventual misery, almost\ninstantly setting booby traps for the next coders upon arrival.</p>\n\n<p>So, where is the creativity? Where is the originality then? It is not gone. It has evolved to a higher level of abstraction,\nleaving to automation the boring stuff. So, if Vanilla JS is considered malpractice in the modern world, and if\nad-hoc JQuery is mocked and scoffed at by React coders, then where is creativity? If yesterday&#39;s craft was the\nhoisting of 15 javascript functions on each page, the New Art of modular coding is akin to a game of Tetris. Part\nby part, module by module, the modern coder open-source window-browses and window-shops; goes home, and cuts and\npastes, and folds and clips, then assembles and hangs to dry. Do Python programmers rewrite each particular module\ndefinition? That&#39;s absurd. Equally absurd is the javascript programmer that rewrites from scratch their modules.</p>\n\n<p>The esteemed Order of JavaScript Coders must wake up, and regain its work-load balance in this new age--an age that\neach year since 2014, the JavaScript language is rewritten, each year now, in both syntactic sugar and also fundamental\nstructure--especially the importing and exporting of modules. Therefore, philosophical Honor behooves each of us\nto a higher complexity, and a new commitment to, the &quot;Separation of Concerns.&quot; We can allow ourselves\na break, thankful for Progress, a progress by which we must\n<i>Stand on the Shoulders of Giants</i>, and Code-Create!</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-12\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Web Dev Affairs</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 12, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">Mark Zuckerberg&#39;s Innocence</h6>\n\n<p class=\"firstparagraph\">Facebook Scandals\n<sup>1</sup> of recent months have demoralized the leadership for a role of misinformation in the Tech Age, however I\ncharge Mark Zuckerberg&#39;s innocence\n<i>not</i> because all of us, as a society, were equally warned. Rather, arbitrary mathematical forces created abnormal,\nnever-before-seen network structural density and symmetry patterns. Technological shifts were so efficient at multiplying\nand exacerbating misinformation because a curious sociological network phenomenon rendered parts of our daily social\nlearning and acculturating process to network forces out of our own control.</p>\n\n<p>A January 2016 American Sociology Association Newsletter Editorial\n<sup> 2</sup> from Sally T. Hillsman, in which she explained how the social mechanisms of our own misinformation were\nnot entirely within our own control to resist. In fact, the arbitrary (often random) social structural changes from\nhigher social-media hours, create an arbitrary social network structure whose links (in their content and influence)\nbegin to dominate over nodes (each of us). In other words, the sway of trends and opinionated critical thought becomes\ndominated by the relationships, e.g., the &quot;likes&quot; and &quot;shares&quot;, leading to a statistically natural\npropensity toward homogeneity--a.k.a. group-think. The mechanism is akin to peacefully swimming close and parallel\nto the coastline, and (due to random coastal floor structure), a rip-tide suddenly ships you far out to sea--a fatal\nand tragic fate rendering experienced swimmers out of their own control. Same principle with an arbitrary\n<i>underlying and unseen</i> network structure.</p>\n\n<p>Our social network structures always are prone to continual shift, and so the usual &quot;interruptions&quot; that\npreviously stopped this inward shift soon began to disappear. Hillsman explains:</p>\n\n<p class=\"quote\">Lies, half-truths, and misinformation spread so rapidly across the public through digital communication that the\ntimespan for thoughtful, effective correction or rebuttal is infinitesimal. Because of confirmation Bias, misinformation\nand outright lies quickly strengthen preconceived truths or pre-held beliefs that are already hard to change.</p>\n\n<p>Therefore, even though we all have been pointedly warned,\n<i> none of us</i> without advanced sociological analysis skills could understand that a curious network phenomonenon--ultimately\ndriven by some arbitrary mathematical calculation involving size, density, symmetry, conditional influences, and\nthe strength of ties outweighing network nodes. For the reasons of these factors, our social inclinations were\n<i>out of our control</i> -- no, but really, this time they were!</p>\n\n<p>And so, we can learn from Sociology what steps to take in order to counteract random, but risky, network phenomena\n-- because nobody likes to go for a swim at the beach, and unwittingly get shipped out to sea!</p>\n\n<p class=\"footnotes\">1. Wired Magazine\n<i>Inside the Two Years that Shook Facebook--and the World</i> (February, 2018)\n<a href=\"https://www.wired.com/story/inside-facebook-mark-zuckerberg-2-years-of-hell\"\n  target=\"_blank\"> Wired Magazine, </a>\n<br />\n<br /> 2.ASA\n<i>Footnotes</i>. (January, 2016)\n<a href=\"http://www.asanet.org/footnotes/jan16/index.html\" target=\"_blank\"> www.asanet.org/footnotes/jan16/</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-13\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Sociology Tomorrow!</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 13, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">The Modern Doctors&#39; Updated Preparation for the Oath\n<sup>1</sup> of Hippocrates:\n<br /> On the 2015 Social Sciences Modification to the AAMC Medical College Admissions Test (MCAT)</h6>\n\n<p class=\"firstparagraph\">Other than college pre-med students, few know the MCAT exam--the gatekeeper of U.S. &amp; Canadian Medical Schools--underwent\na major modification in 2015.\n<sup>2</sup> Much deeper than Biological and Technological updates, major sections were added and/or expanded including\nthe Social, Pyschological and Biological foundations of\n<i>behavior</i>. Named the\n<i>Health Systems Science</i>\n<sup>3</sup>, the American Medical Association&#39;s modern, holistic approach articulates outcomes-based measures for\nhealthy living and disease prevention efforts. You could say the AMA is indeed,\n<i>woke</i>.</p>\n\n<p>But really, what&#39;s the difference and why would we care? And, who doesn&#39;t know that an apple-a-day keeps\nthe doctor away? Dr. Jeffrey Borkan, MD, PHD of Brown University&#39;s Warren Alpert Medical School, explains the\nevident role of all those unnoticed social interactions involved in obtaining and consuming that apple. Further,\nthe spatial and economic\n<i>availability</i> of that apple also plays a role in keeping the doctor away. Borkan explains:</p>\n\n<p class=\"quote\">It&#39;s time for us to take a leap forward in educating physicians for the health care delivery models of the future&mdash;those\nthat aim to improve not just the health of the individual patient and their family, but also the community and the\npopulation.\n<sup>4</sup>\n</p>\n\n<p>What, then, specifically, are the mechanisms that a community network&#39;s aggregated health may be inextricably\ntied up with\n<i>our own</i> individual health? In short, they are the sharing of health-promoting resources, timely assistance,\nhealth-promoting information channels -- all this, among the countless perks of a healthy social circle!</p>\n\n<p class=\"citations\">1.\n<a href=\"http://www.greekmedicine.net/whos_who/The_Hippocratic_Oath.html\" target=\"_blank\">The Oath of Hippocrates</a>\n<br /> 2.\n<a href=\"https://students-residents.aamc.org/applying-medical-school/article/changing-mcat-exam/\" target=\"_blank\">The 2015 AAMA Changes to the Medical College Admissions Test</a>\n<br /> 3.\n<a href=\"https://www.ama-assn.org/education/teaching-new-content-health-systems-science\" target=\"_blank\">American Medical Association&#39;s\n  <i>Teaching New Content Health Systems Science</i>\n</a>\n<br /> 4.\n<a href=\"https://www.ama-assn.org/education/teaching-new-content-health-systems-science\" target=\"_blank\">ibid.</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-14\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech longtitle\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">\n<s>Web Dev Affairs</s> Sociology Tomorrow!</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 14, 2018</h6>\n\n<p style=\"color:green;\">\n<i>Due to the Tragic Events in Florida, Tech to the Rescue blog Rescheduled to February 16th ...]</i>\n</p>\n\n<h6 class=\"chapternumber dailytitle\">\n<s>Tech to the Rescue: Secondary health effects of the Fitbit toward health-information sharing channels within a community.</s>\n</h6>\n\n<p class=\"firstparagraph\" style=\"color:green;\">Given that a community network&#39;s aggregated health is inextricably, and symmetrically, tied up with\n<i>our own</i> individual health, app-developers may design activity- and communication-based apps more responsibly,\nand in touch with modern healthcare recommendations. After all, if the Saintly Mark Zuckerberg&#39;s communication-\nand activity-based app inadvertantly led to novel, and deeply consequential, effects, then ...</p>\n<span class=\"alert\">* Given the Tragic Events in the School Shooting in Florida, I felt a topic of more gravity was in order ... :( </span>\n\n<h6 class=\"chapternumber\">Feb 14, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">A New Kernel, and the Manifestation of a Two-Hundred Year Problem named\n<i>Anomie</i>\n</h6>\n\n<p class=\"firstparagraph\">Given the tragic events at a Florida school over Valentine&#39;s Day, 2018, who can write about Fitbits? So, thoughts\nand sympathy for those students today that endured this horror. 19 years after the first-of-its-kind school shooting,\nwe as an American society have not become &#39;numb&#39; to these events. It hurts as much as it did in 1999.</p>\n\n<p>Darn that innocuous Spring day in 1999, when we heard the most absurd news-- students attacked their own colleagues\nat Colombine? In my blog post from January 10, I wrote that American Sociology, along with Qu&eacute;bec, came of\nage much later than European Sociology. The past 50 years&#39; social changes and new problems are generally atrributed\nfor the increasing demand for sociological expertise after 1999, after a singular, senseless tragedy of a school\nshooting--this event, like a small kernel of societal desperation for a solution--led to a flurry of self-professed\nsociologists &agrave; la Michael Moore&#39;s Colombine, and other social-responsibility themed social consciousness.\nSo far, only mutually incompatible solutions. The problem, however, is not new, only the manifestation of it.</p>\n\n<p>Suicide rates in 19th century France, disproportionately high, also served as a symptomatic manifestation of the\nsame problem, called\n<i>Anomie.</i>\n<sup>1</sup> The term,\n<i>Anomie</i>, coined by Emile Durkheim in the late 1800&#39;s, captured the sense of instability, cultural and moral\nrelativism that undermined a shared sense of meaning. Suicides, week-after-week, month-after-month? In 1897 France,\nnoone had ever seen it before--at such rates--and people wanted answers. Alas, a kernel of social desperation leading\nto inquiry.</p>\n\n<p>People wanted to know why so many in the population responded negatively to the rapid changes, urbanization (Dreadful\nfactory conditions &agrave; la\n<i>Taylorism&#39;s</i> calculated efficiency) new technologies, i.e. electricity, railroads, steam engines; these created\nan arbitrarily new world, very suddenly. Suddenly, like trying for the first time a roller-coaster, when all you&#39;ve\never known has been the carousel. So, we see technology&#39;s role for well or for ill, our job is to understand\nhow to dial-in the tech specs necessary to keep society smiling on this roller coaster through another, yet not\naltogether new, technological thrill-ride.</p>\n\n<p>1.\n<a href=\"https://www.researchgate.net/publication/228173911_The_Sociology_of_Suicide\" target=\"_blank\">1897, Suicide, &Eacute;mile Durkheim.</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-15\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH:</h5>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 15, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card</h6>\n\n<h6>\n<small class=\"jargon\">Tech blockchain jargon alert ahead, with all effort made for clarity! I treat a broad overview of the existing trajectory\n  of blockchain-related micro-economic advancements. I make a technical &amp; contextualizing\n  <abbr title=\"this link just goes down 5 paragraphs to Feb. 17th\">\n    <a href=\"#18-02-17\"> three-part blog series in my Feb. 17-20 posts</a> on the micro-economic horizon of blockchain technologies.</abbr>\n</small>\n</h6>\n\n<p class=\"firstparagraph\">Has anyone else been underwhelmed by the lack of Bitcoin&#39;s daily\n<i>presence</i>, despite its everpresence at the dinner tables and caf&eacute;s across America. Sure, it&#39;s more\nof a &quot;metropolitan&quot; phenomenon; and sure, it&#39;s become an accepted global platform--along with myriad\nother crypto-currencies, but it&#39;s exchange-worthiness remains shrowded, and misunderstood by many. Cryptocurrencies\nare useful as a vehicle for investment, and yes, there are Bitcoin millionaires due to the currency&#39;s rise to\nfame with last year&#39;s increase in value (from $1,000 to ~$20,000) etc., etc. But, so far its contributions,\nuses, fame are one-sidedly\n<i>macro-</i>economic. A recent CNET article\n<sup>1</sup>, among others, documents miniscule (and not improving) percentage of\n<i>actual</i> use at the &quot;cash-registers&quot; of society.</p>\n\n<p>Is there something wrong with such little micro-economic usage? Not at all! According to general sociological\n<i>Early Adopter</i> theory--based on Everett M. Rogers&#39;\n<i>Diffusion of Innovations</i>\n<sup>2</sup>--the timeline of the Innovation Adoption Lifecycle is fairly ordinary. That is, the Roger&#39;s bell curve\nranges from the beginning innovators, to early adopters, early majority, and late majority. However, the blockchain\narticles always miss the point. Currencies are more of a distraction compared to the genuine usefulness for the\nevery-person, in every-day affairs, on a given day--i.e., micro-economic use.</p>\n\n<p>The true value, the kind that makes our lives easier on any given day, and for the every-person, is\n<i>not</i> the currency, it is the contract, that allows for individualized, targeted sharing of specific information--whether\nfinancial, governmental, or any other centralized database. An example is in order before I continue, since we can\nall relate to the risk of using a credit or debit card, the risk most notably concerning Target store credit card\nhacks a couple years ago.</p>\n\n<p>Suppose a person shops at 3 different retailers, using a different credit card for each. For these 3 transactions,\nthis person had only needed to provide two discrete pieces of information about themselves for each transaction:\nthey prove they have the $27, $200, and $5; and they prove a third party(i.e.,CC or bank)will make that $27, $200,\nor $5 available, if their client agrees. Instead, for each transaction, they open their\n<i>entire</i> financial information, and can only hope that law-enforcement will prevent cyber-theft; and if the store&#39;s\ndatabases are hacked, then tough-luck!</p>\n\n<p>Crypto-contracts provide the technology for this individualized, risk-free transaction, rather than for each transaction,\nproviding the generalized information for individual transaction. Highly inefficient! Nobody thinks to walk around\nwith their life-savings in cash, then at the 7-11 store, to open their wad of cash and peel out a bill. The credit\ncard system, blessed as it is, did not previously have technology to avoid this very thing. So, financial institutions\nhave had to rely on the many layers of security, passwords, pins, mothers&#39; maiden names, etc. Then, based on\nthe mathematics behind prime numbers, they hope to keep your money safe in one, centralized spot--with a bright\nred target on it.</p>\n\n<p>Now, the crypto-contract provides this decidedly *micro-economic* experience for the everyday person. And that, my\nfriends, has nothing to do with crypto-currencies. There is no micro-economic value in crypto-currency, instead\nthe crypto-\n<i>contract</i> is the true, unsung hero, and a hero we will all get to know. [personal opinion - this hero&#39;s name\nis the Ethereum Virtual Machine]. In any case, Crypto-contracts provide this ability to provide pinpointed,\n<i>specific, targeted information</i> as citizens, too. When we provide our drivers license number, for the sake of\nrenting that car, we provide every aspect of information of ourselves to Hertz. They don&#39;t need this. They need\nto know only and exclusively driving-record related details--not the entire governmental database of information\nabout you!</p>\n\n<p>1.\n<a href=\"https://www.cnet.com/news/bitcoin-cryptocurrency-big-in-investing-but-still-lousy-for-buying-a-sandwich/\"\n  target=\"_blank\">https://www.cnet.com/news/bitcoin-cryptocurrency-big-in-investing-but-still-lousy-for-buying-a-sandwich/</a>\n</p>\n\n<p>2.\n<a href=\"https://eric.ed.gov/?id=ED065999\" target=\"_blank\">Rogers, E. M., &amp; Shoemaker, F. F. (1971). Communication of Innovations; A Cross-Cultural Approach.</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-16\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Web Dev Affairs</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 16, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">Tech on the Regret: Unintended, secondary effects of communication- and activity-based app-designs</h6>\n\n<p class=\"firstparagraph\">Given that our app-use is inextricably tied up with our own behavior, activity/communication-based app developers\nhave in the past year accepted (mostly in word) a renewed responsibility. More like resposibility for a multi-faceted\npower of influence granted to an industry, suddenly, disproportionately great, and\n<i>semi-arbitrarily related</i> to the designer&#39;s intent (and control!). After all, if the Saintly Mark Zuckerberg&#39;s\nactivity/communication-based app inadvertantly led to novel, and deeply consequential, effects, then anyone could.</p>\n\n<p>After all, who could guess\n<i>how</i> these app-design effects would affect the users, years later. Who do we think programmers are, sociologists?\nMore specifically, who could know\n<i>which</i> mundane coding practices, arbitrary app-design--like sharing permissions/features? Sure, everyone deep\ndown knew their company practices yield unfathomable power of influence over the daily habits of cell-users, a.k.a.\neveryone. The easy part is knowing; the hard part is learning how and why certain app-features lead to behavioral\nrisks.</p>\n\n<p>There could be no better example than the Alcoholic faced with an intervention by a loving family longing for change.\nThe alcoholic could be forgiven for past misdeeds, but without actual\n<i>Acknowledgement</i> of a crisis in direction, which necessitates professional help from social scientists. Therefore,\nthe recent\n<i>acknowledgments</i> signify something deeper--they signify a humility that app-designers are not sociologists, generally\nspeaking. So, that means hiring sociologists, psychologists, anthropologists for every N\n<small>th</small> app-coder and software engineer. History can&#39;t be rewritten, but it can be interpreted and learned\nfrom. The acknowledgment is itself a victory if it induces learning from the raw, social sciences, whose expertise\n<i>can</i> predict how or why certain &quot;life&quot;-features, practices, and policies often unfold with undue and\nunintended social consequences.</p>\n\n<p>Water under the bridge, but going forward, it is one thing to claim a &quot;renewed sense of remorse&quot;, another\nto acknowledge, learn and change. Like last November\n<sup>1</sup> when Facebook co-founder Sean Parker confessed certain designs like &quot;social-validation feedback loop&quot;\nand other app-design intentions, while ignoring potential secondary effects on society. So, the\n<i>Acknowledgment</i> is the big win here--not so much the remorse!</p>\n\n<p>1.\n<a href=\"https://digitaladdictsblog.com/facebook-co-founder-says-company-built-to-exploit-you/\" target=\"_blank\">https://digitaladdictsblog.com/facebook-co-founder-says-company-built-to-exploit-you/</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-17\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 17-18, 2018\n<br /> Weekend\n</h6>\n\n<h6 class=\"chapternumber dailytitle\">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part II:\n<br />\n<br /> Seven Nuts &amp; Bolts Features of the New Blockchain Micro-Economy\n<br />\n<small class=\"jargon\">Tech jargon alert ahead, with all effort made for clarity! Here, I provide a technical &amp; contextualizing addition\n  to my\n  <abbr title=\"this link just goes up 7 paragraphs to Feb. 15th\">\n    <a href=\"#18-02-15\"> February 15th blog post</a>\n  </abbr> on the micro-economic horizon of blockchain technologies. </small>\n</h6>\n\n<p class=\"firstparagraph\">7 Ethereum-based technological features offer us a new world -- a decentralized new world, not dependent on the centralized\nservers of Instagram, Comcast, T-Mobile, Amazon, etc. With that statement ends general consensus among blockchain\nexperts, pundits, and authors. However, if the current logistical obstacles provide controversy and competing algorithms\nover sustainability, security, and scalability, then they reveal much more about the general pathway of social uses\n(and potential effects) than they hide. In my February 15th\n<a href=\"#18-02-15\">blog</a>, I touched on a few features of micro-economic uses so as to distinguish the more certain aspects of the\ncrypto-contract horizon.</p>\n\n<p>\n<strong>Prologue</strong>\n</p>\n\n<p>So, what are some core features of block-chain technology that affect the quality of our lives, and the\n<i>productivity</i> of our work as a society of academics, public-sector and private-sector professionals? First, a\nlittle background and context before I outline seven blockchain functionalities. The Ethereum blockchain helps distinguish\nitself--and its blockchain-native language Solidity--from earlier tech, like Bitcoin and other Proof of Work-based\nblockchains. Ethereum blockchain offers a syntax and programming features, e.g. &quot;looping&quot;, &quot;recursion&quot;,\nwith the full power of a\n<i>Turing Complete</i> language--that is, given enough resources, the language can solve any programmable problem.</p>\n\n<p>More background and a clarifying metaphor are in order: The Bitcoin blockchain transaction resembles the accounting\nsystem of a foos-ball table point rack with a basic calculator glued to the side. In contradistinction, An Ethereum\nblockchain transaction would resemble a network of computers,\n<i>which is itself,</i> a computer--hence, the name Ethereum Virtual Machine. This allows for Quickbooks to calculate\ninto a PDF to be sent via an email contract-signing program. Much more useful!</p>\n\n<p>Therefore, Ethereum&#39;s Blockchain is more than a networked, chained list of blocks, like Bitcoin. The Ethereum\nblockchain is actually a &quot;Virtual Machine&quot;, like a a big networked &quot;home computer&quot;. The native\nlanguage of the blockchain, Solidity, allows for an\n<i>application binary interface</i>, ABI. So, for example, I can type up an Ethereum contract on my home computer,\nthen directly access by command line the blockchain itself. In layman&#39;s terms, the manner that modern-day app,\nfor example Instagram, is a centralized API (Application Programming Interface) that allows one programming system\nto interact with another, such as Instragram offers a &quot;sharing API&quot; that connects to hardware contacts,\nthus facitilating communicating with third-party aplications, like sharing your instagram picture to your Facebook\naccount, via your T-Mobile phone&#39;s contacts list. This API relationship broadly describes the modern world we\nlive in, wherein a Chryser driving system exchanges API information with your T-Mobile Bluetooth network system,\nwhich exchanges API information with your own contact list, and so on, and our lives are made easier.</p>\n\n<p>So, are we out of the woods? Has Ethereum solved the blockchain question? Yes, if it were the 1920 pre-relativity\ndays; However, with the advent of quantum computing, potential security vulnerabilities immediately arise. The reason\nbeing that digital math uses binary &quot;on/off&quot; calculations, while quantum math implicates a tertiary,\n<i>qubit</i> &quot;simultaneous states&quot;. Therefore, we have now entered the 3rd generation of blockchain technology,\nboth programmable, but also quantum-proof due to mathematical graph features. For example, IOTA&#39;s blockchain\ndesign utilizes a\n<i>Winternitz One-Time Signature</i>, by which one&#39;s transaction is entered into with a private-key, and the blockchain\nmoreso resembles a &quot;Tangle&quot; of a directed graph, which allows for computational &quot;states&quot;. IOTA\nrecently garnered criticism in January 2018 due to an unfortunate crypto-hack, that exposed an apparent vulnerability.\nIn truth, this was a case of user-error because users were\n<i>re-using</i> their one-time keys, which significantly decreases security to the point that a home computer could\ncrack the code! I choose to not digress further, and quantum computing is not quite advanced enough now to cause\ndamage, but in the future could potentially split the blockchain in two, or other quantum possibilities.</p>\n\n<p>In sum, the technical obstacles change each month, however one must not lose sight of the forest for the trees. Social\nuseablity, potential scope and of course unintended consequences have all finally begun to emerge, at least in form,\nwith little difference between the 2nd generation blockchain or the 3rd generation Patrician directed graph blockchain.\nThe underlying principle of the blockchain&#39;s micro-economic utiliity through crypto-\n<i>contracts</i> is the same, as opposed to plain crypto-currency. you know the usual bartering solutions for Supply\n&amp; Demand leading to Economics Game Theory, etc. This is where we must take our leave of the Hard Sciences of\nMathematics, and enter the realm of Sociology, Psychology, Anthropology and Economics.</p>\n\n<p>&nbsp;</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-19\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 19, 20189</h6>\n\n<h6 class=\"chapternumber dailytitle\">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part III:\n<br />\n<br /> Seven Features of the New Blockchain Micro-Economy\n<br />\n<small class=\"jargon\">Tech jargon alert ahead, with all effort made for clarity! The first 3 of 7 new possibilities thanks to the programmable\n  blockchain.</small>\n</h6>\n\n<p class=\"firstparagraph\">The guiding light through the centuries of scientific paradigms, in the Kuhnian sense\n<sup id=\"19-1\">1</sup>, have derived from deductive ideas from above - whether priestly or royal decree. Then, the primacy of the\n<i>Scientific Method</i> from the Renaissance forward--punctuated first by Copernican Heliocentrism, then other Paradigm\nShifts--has directed rational and ethical norms in each respective period, e.g. Enlightenment authors of 17th, 18th\ncentury. Fast forward to the modern period, wherein the current era&#39;s emerging paradigm holds Sharing as a collective-priority\nand responsibility, then an amazing philosophical moment.\n<i>Historical Materialism</i>\n<sup>2</sup> prescribes what is directly here a novel Paradigm Shift by which authority is not derived from governmental,\nfinancial sources, but rather the\n<i>shared</i>societal consensus about cryptographic, mathematical proofs as true authority. Further, the revolutionary\nshift also innately provides tools for implemention through decentralized, programmable data-sharing. Cryptography\nhas in a sense become a\n<i>de jure</i> middle-person for identification and verification of property.</p>\n\n<p>\n<strong>I. Protecting rights through immutable records</strong>\n<br /> Inalieable Rights can now be identified and verified by the cryptographic authority of a mathematical proof, rather\nthan exclusively through governmental or financial institutions from above. The modern period also has held this\ndecentralized, individual authority as the\n<i>a priori</i> starting points for philosophical proofs. Premises about truth begin with the conditions of humankind,\nnot idealogies. In fact, it was the\n<i>Young Hegelians</i> of early 19th century Vienna &amp; Berlin, who ushered in the Modern Era of Western Philosophy,\nby laying out Truth as inverted, beginning from the empirical &quot;ground&quot; upward. This &quot;upside-down\ntree&quot; defines philosophical modernity. Jean-Paul Sartre wrote that the whole of\n<i>Existentialism</i> and 20th century philsophy is a mere subset, and never escapes Continental Materialism, as argued\nin Sartre&#39;s\n<i>Search for a Method</i>.\n<sup>3</sup>\n</p>\n\n<p>All of the Sciences, prodded by this Truth of Empiricism, followed suit through all the tech innovations since Hegel.\nI&#39;m so surprised by this, because for me, the role of cryptography is shocking on two levels. First, cryptography\nresemblees philosophy rather than the Empiricism that I had envisioned would govern social rule (Some once thought\nnuclear sciences held this role--no longer! Mathematics takes the crown. Secondly, I&#39;m still dumbfounded that\na Paradigm Shift\n<i>first</i> offers the tools to fulfill itself? Staggering to consider the arbitrary changes ahead for a society that\nis provided the tools of social structural change first, but how quite convenient!</p>\n\n<p>\n<strong>II. Bureaucratic Atomization in a True Sharing Economy</strong>\n</p>\n\n<p>It is satisfyingly reassuring to see the good-natured, altruistic efforts among the thousands, upon thousands of\nopen-source volunteers, and blockchain innovators, like Vitalik Buterin author of Ethereum Virtual Machine, whose\naims and efforts make staggering progress each quarter. The potential for removing the &quot;middle-person&quot;\nfrom the day-to-day, micro-economic &quot;cost of living&quot;. This goes for for the exchanging of titles, legal\ndocuments, etc.</p>\n\n<p>Sharing of Resources is, in my personal opinion, critical to global future--both out of increasing necessity in allocating\nincreasingly limited resources; an arbitrary rearrangement of\n<i>Social Structure</i> and distribution of its resources. While the exponential population growth looms on the near\nhorizon, a clear, pre-existing solution begins with a focus on\n<i>smart</i>, effective sharing of resources. The driving principle of sustainability is made convenient by means of\nblockchain technology, extending for example to local economies, cooperatives, ride-sharing, etc.</p>\n\n<p>\n<strong>III. Removing Double-Dipping from International Remittances </strong>\n</p>\n\n<p>\n<i>&quot;Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.&quot;\n  </i>\n<br /> --Antoine de Saint-Exup&eacute;ry, 1939</p>\n\n<p>Taxes and tariffs are difficult enough, the double-dipping of the current international remittance system, &aacute;\nla Western Union, does not reflect the global, sharing Economy of 2018. The existing remittance system (not speaking\nto\n<i>centralized</i>, middle-man alternatives like PayPay, etc.)--supposing if I wire $2 Loonie to a Canadian friend&#39;s\nCanadian Bank--requires payments executed through two separate bank transactions in two national payments systems,\nthus the sending country and receiving country each take a cut. Like everything else--c&#39;est la vie. Or is it?\nThe beauty of Ethereum is that it &quot;talks&quot; well with others and across borders, while Bitcoin remains of\nlittle use for micro-transactions that involve semi-basic calculations. The reason being that Bitcoin blockchain\nlanguage, Script, cannot support loops (while statements, etc.)</p>\n\n<p>Currently, both EOS and Ethereum blockchains appear poised for the most financial-friendly blockchain tech.</p>\n\n<p>1.\n<a href=\"https://www.economist.com/news/business/21722869-anti-establishment-technology-faces-ironic-turn-fortune-governments-may-be-big-backers\"\n  target=\"_blank\">https://www.economist.com/news/business/21722869-anti-establishment-technology-faces-ironic-turn-fortune-governments-may-be-big-backers</a>\n</p>\n\n<p>2.\n<a href=\"https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/\" target=\"_blank\">https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/</a>\n</p>\n\n<p>3.\n<a href=\"http://www.bard.edu/library/arendt/pdfs/Sartre-Search.pdf\" target=\"_blank\">\n  <i> Search for a Method</i>, Jean-Paul Sartre, 1957</a>.\n<br />\n<small>Sartre would later be awarded the Nobel Prize in 1964, but declined it.</small>\n</p>\n\n<p>\n<a href=\"https://projektintegracija.pravo.hr/_download/repository/Kuhn_Structure_of_Scientific_Revolutions.pdf\" target=\"_blank\">4. Kuhn, Thomas, The Structure of Scientific Revolutions, </a>\n</p>\n\n<p>\n<a href=\"https://hbr.org/2017/01/the-truth-about-blockchain\" target=\"_blank\">5. Harvard Business Review,\n  <i>The Truth about Blockchain, Feb. 2017. (This is an older article, but very clear &amp; insightful)</i>\n</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-20\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">&nbsp;</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 20, 2019</h6>\n\n<h6 class=\"chapternumber dailytitle\">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part IV:\n<br />\n<br /> Seven Features of the New Blockchain Micro-Economy\n<br />\n<small class=\"jargon\">Tech jargon alert ahead, with all effort made for clarity! The 4th through 7th outlined Features of the New Blockchain\n  Micro-Economy</small>\n</h6>\n&nbsp;\n\n<p class=\"firstparagraph\">I feel that data is one of the more underestimated new commodities of the age. Most visualize data as rows and columns,\nand at most only non-conditional dynamic data. Data are not so mute! Data, in most object-oriented languages at\nleast, represents\n<i>functions</i>, conditions, and predicted values. And so, our own behavior, coupled with our networks&#39; behavior,\ncoupled with predictive analytics--this represents a wealth of information beyond our attributed or inherited traits.\nThe programming is\n<i>in</i> the data, however, citizens have become less and less involved, ceding app by centralized app our own information\nand ensuring profit to 3rd party marketers. The centralized nature of the internet allows for this, while the new\nlandscape of\n<i>decentralized applications</i> (DAPP) completely upends this structure of the status quo.</p>\n\n<p>\n<strong>IV. Enabling citizens to own &amp; monetize their data (&amp; protect privacy)</strong>\n<br /> Ethereum offers a decentralized solution to &quot;owning&quot; one&#39;s own data, as data can be decentralized\nand returned to the individual&#39;s control, and\n<i>profit</i>. As sure as the 19th century&#39;s &quot;labor-hour&quot; became commodified to a calculable asset, i.e.\nproperty, which\n<i>another</i> party controls and makes profit; And as sure as the 20th century&#39;s data analytics became commodified\ninto calculable assets for another party to take control and make profit; then only now in this 21st century does\ntechnology offer a new, more egalitarian path.</p>\n\n<p>\n<strong>V. Ensuring compensation for the Creators of Value </strong>\n<br /> So, how would decentralized innovations of blockchain\n<i>distributed ledger</i> technology compensate those whose actions, behavior, opinions, friend-networks, artwork,\nmusic, videos and other contributions profit the creator?</p>\n\n<p>\n<strong>VI. The Halcyon Age of Transaction-Chain Enterprise</strong>\n</p>\n\n<p class=\"quote\">According to Greek Mythology, the days of eery, noticeable lack of storms have never been interpreted as a period\nof grace. Moreso,\n<i>Halcyon</i> tranquility only means a temporary moratorium on the winds and waves, imposed by Aeolus, God of Wind,\nto protect the nesting eggs of Alcyone, his daughter.</p>\n\n<p>If blockchain tech changes how we do research, analysis, and forecasting, as much as it changes international, and\ncross-industry transactions, then are we faced with a similar dilemma as the &quot;novelty&quot;, and double-dealing,\nof multi-nationals of the 1990s? No, because blockchain renders organizations, even those with a spotty past, into\ntransparent, democratic, efficient, secure and easily scrutinized.</p>\n\n<p>After all, without transparent proof, how else would I know my bananas are the &quot;pura vida&quot; Costa Rique&ntilde;\nones? More importantly, what was the carbon footprint of that banana&#39;s journey from its native soil to my breakfast\ntable? New blockchain companies like\n<a href=\"https://www.provenance.org/\">Provenance.org</a>,\n<a href=\"http://www.skuchain.com/\" target=\"_blank\">skuchain</a>,\n<a href=\"http://www.blockverify.io/\">http://www.blockverify.io/</a> are a few noticeable game-changers. So, for bananas not backed by mathematical proofs,\nI really have to ask myself, is it\n<i>really</i> an authentic Fair Trade banana?</p>\n\n<p>Transactions are hardly valuable in the products themselves, if removed from the value of the\n<i>transaction per se</i>. International supply chain transactions, by virtue of a recently possible decentralized,\npermanent record and monitoring, have begun to make inroads in agriculture, petroleum, pharmaceuticals, food-supply\nand other multi-stage industries.</p>\n\n<p>If corporate and governmental transactions are to be made public--many bearing enterprise or State secrets, then\nwill forecasting also go the way of birds? Possibly. Online platforms like Augur\n<sup id=\"20-8\">8</sup>are creating global, decentralized prediction markets, in domains like sports betting, financial markets\nspeculation and so forth. Armed with vast, transparent knowledge, the everyday person can now access the whims and\npower of Aeolus, and forecasting the winds of Fortune.</p>\n\n<p>\n<strong>VII. Reinventing Government &amp; Democracy</strong>\n<br /> ...to be completed...</p>\n\n<p>1.\n<a href=\"https://www.provenance.org/\" target=\"_blank\"> https://www.provenance.org/ </a>\n</p>\n\n<p>2.\n<a href=\"http://www.skuchain.com/\" target=\"_blank\"> http://www.skuchain.com/ </a>\n</p>\n\n<p>3.\n<a href=\"http://www.blockverify.io/\" target=\"_blank\"> http://www.blockverify.io/ </a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-21\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Data Analysis Musing</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 21, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">Facebook-Friendly Third-Generation Data Structures</h6>\n\n<p class=\"firstparagraph\">Today, I&#39;m going to write about data structures, and challenges that face Vitalik Buterin and other blockchain\narchitects. &#39; Now, why in the\n<i>world</i> would I or anyone else care about ooh, merge sorts, bubble sorts, classificatory trees, and the advent\nof a third form of data structure?</p>\n\n<p>Today, we live in an ever more relational world. With all our technology, we just can&#39;t wait to hear the latest\ngossip about sister Becky&#39;s Boyfriend&#39;s Brother&#39;s Friend that\n<i>also</i> got to meet Shakira. Gossip to one person is a valuable asset to the data analyst. Because, how else could\nan algorithm draw simultaneous conclusions about two friends that &quot;liked&quot; the same Samsung VR, and that\nthey are both located near Best Buy. Thanks to classificatorial wisdom of AI &amp; plain machine-learning?</p>\n\n<p>These relational queries are simply too difficult for relational, row &amp; column SQL data structures. In fact,\nmany queries are impossible, due to unprescient database schema architectures. Next, with the need to &quot;objectify&quot;\ndata into non-relational objects, rather than an antiquated, rigid row-and-column design. Thus, the second major\ntype of data structure is more flexible and adept in finding these relational queries that are ever more in vogue.\nHowever, the crystal-like, pristine non-relational, No-SQL designs quickly turn to spaghetti, and are poor for scalability.\nBetween a rock and a hard place, a third data structure has emerged in recent years.</p>\n\n<p>Graph Data Structures\n<sup>2</sup> allow data queries that had otherwise been impossible to capture in an entity relationship diagram. The\nideal example to clarify is the manner that the Swiss banks&#39; accounts were discovered to be hiding vast amounts\nof hidden taxes, etc. The cover-up was so well-constructed that not until new, graph database queries discovered\npatterns of money flow\n<sup>1</sup>:</p>\n\n<p class=\"quote\">The data was then turned into a graph format to detect then fine-tune the connections between the nodes. The Swiss\nLeak held around 60,000 files that contained information about over 100,000 clients in 203 countries, which means\nthat the resulting graph database had more than 275,000 nodes with 400,000 relationships among them.</p>\n\n<p class=\"quote\">By being able to easily visualise the networks around clients and accounts, the reporters found many more connections\nthan they had before, which lead to the Swiss Leaks revelations soon being shared with the public and regulators\nacross the globe.</p>\n\n<p>And you thought that plagiarism-detecting software was impressive for complexity! The beauty of this newly available\nsoftware (even Microsoft jumped on board in recent years) means that sociologists, economists can begin to make\nbetter headway in the way that our many interactions become more complex with more data. Remember, in the past ten\nminutes, more data information was just produced than most of human history! Thus, new and upcoming needs in domains\nlike content management &amp; access control, geo-routing (public transportation), gene sequencing, bio-informatics,\nand so on. So, as technology takes us forward, and we make our considerations, let&#39;s stick by the golden rules\nof parallel processing, scalability, and, now, graph-network mindedness for the new data structures, and schema,\nof the Era!</p>\n\n<p>1.\n<a href=\"https://www.globalbankingandfinance.com/how-a-graph-database-unearthed-major-financial-improprieties/\"\n  target=\"_blank\"> https://www.globalbankingandfinance.com/how-a-graph-database-unearthed-major-financial-improprieties/ </a>\n</p>\n\n<p>2.\n<a href=\"https://neo4j.com/blog/analyzing-panama-papers-neo4j/\" target=\"_blank\">By being able to easily visualise the networks around clients and accounts, the reporters found many more connections\n  than they had before, which lead to the Swiss Leaks revelations soon being shared with the public and regulators\n  across the globe. </a>\n<br /> Other major vendors in graph data structures based on Neo4j: OrientDB, ArangoDB, Titan, mongoDB, Complexible Stardog,\nand Franz AllegroGraph.</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-21\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 22, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">Languages</h6>\n\n<p class=\"firstparagraph\">While I&#39;ve had blockchain-related topics on the mind lately, it seems I can&#39;t escape it as I broach new fields--blockchain\nis everywhere! Well, I had begun my blog with intentions about the accelerated speed of language and syntax formation,\nand the curious phenomenon I&#39;d call, for lack of a better word or or my own reading, &quot;declarative-syntax-merging&quot;.\nThis involves the curious, and largely unknown, growth of JavaScript scripting language into almost every domain\nof web apps, data analysis, and even the bounds of\n<i>Logic</i> itself. Though I won&#39;t submit my readers to a history of a language, suffice it to say that, &quot;If\na certain algorithm, device, or object is programmable, then it will eventually be programmed in JavaScript.&quot;</p>\n\n<p>Without getting into technicals, I&#39;ll instead use a perfect metaphor--the manner by which English merged with\nFrench, beginning with the conquests of William of Normandy, around 1096 onward. Almost a thousand years later,\nwe can see how English grammar inherited it&#39;s Anglo-Saxon Linguistic roots, along with the core vocabulary;\nThen, as English vocabulary moves past the first few thousand core words, e.g. &quot;milk&quot; or &quot;house&quot;\nfrom &quot;melche&quot; or &quot;haus&quot;, then more than 70% of English Vocabulary is directly inherited from\nFrench, e.g. &quot;lactose&quot; or &quot;mansion&quot; from &quot;lait&quot; or &quot;maison&quot;.</p>\n\n<p>Similarly, the language of the web and original browsers, JavaScript, has similarly morphed into a new language called\nSolidity, but in only a micro-fraction of English&#39;s time. The usual FOMO logic propels coding language use,\nfor example FOMO induced Microsoft&#39;s flagship Text Editor, Visual Code, to adopt it years ago.\n<sup id=\"22-1\">1</sup> The language of Ethereum Blockchain is Solidity, which like the above example, has two parents, one non-legitimate.\nIt is in all respects totally JavaScript, yet with object-oriented elements of C++. For the layperson, let&#39;s\njust say Solidity resembles a &quot;Liger&quot;, in it is at it&#39;s core JavaScript, yet with increasing sophistication\nbased on C++ logic, its head and torso has begun to resemble the powerful machine-code of C++ ever more. And it\nis a beautiful, but curious phenomonenon.</p>\n\n<p>\n<a href=\"http://www.ibtimes.co.uk/microsoft-adds-ethereum-language-solidity-visual-studio-1552171\" target=\"_blank\">http://www.ibtimes.co.uk/microsoft-adds-ethereum-language-solidity-visual-studio-1552171</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-23\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Sociology Tomorrow!</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 23, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">1.4 Million Reasons for more Women in Tech</h6>\n<a href=\"#18-03-08\" rel=\"stylesheet\">Blog addressed again March 8, 2018 </a>\n\n<p class=\"firstparagraph\">1.4 million\n<i>new</i> jobs by 2020; End over end, year after year, the computer programming industry continues to add another\n20% more jobs each year, for the next five years. This is the only field that demand outstrips the supply--and increasingly\nshort supply. So much so, the US Department of Labor forecasts U.S. citizens will be able to fill 39% of those positions;\nthere are not enough Immigration visas (especially in the Trumpian era of isolationism) to make up the rest.</p>\n\n<p>&nbsp;</p>\n\n<p>So, how is it that only 14% of females in the entire field of cybersecurity? Silicon Valley is, at its best, obscenely\none-sided. At Google, only 17% of the company&#39;s tech jobs are filled by women. Facebook women staff only 15%\nof tech jobs, and Twitter? 10% female. The figures on women in computer science across the nation, across the entire\nindustry are not improving, but\n<i>declining</i>?\n<sup>1</sup>\n</p>\n\n<p>Of course, we&#39;ve heard these statistics from any given headline, and in the halls across the university landscape,\nstarting with Women in STEM (Science, Tech, Engineering, Mathematics) programs.\n<sup>3</sup> Yet, why, with so much money, so many programs, so many non-governmental, non-profit effort?</p>\n\n<p>I argue that tech\n<i>climate </i> is directly to blame. Who then? Not a person, but principles are to blame. Culture--often defined as\nshared beliefs, norms, language and behaviors--can hardly be changed, but it can be understood.\n<br /> There is a book, called &quot;Program or be Programmed\n<sup id=\"24-4\">4</sup>\n</p>\n, by which the author explains social consequences of a dichotomized society--between those that manipulate the environment\naround them, whether automating tasks at work, or simply fixing a simple software bug, by adding a comma. This literacy\nof the Current Era is akin to the 26-letter alphabet of written sentences and paragraphs, and--not to be taken for\ngranted--is the exclusive form of communication, outside of a 100-foot perimeter, up until 150 years ago. Knowledge\nis not power, the communication of knowledge is power.\n\n<p>&nbsp;</p>\n\n<p>I argue that today, the power is to program one application programming interface (API) to talk to another API. In\nother words, the ability to directly communicate with software at the command-line is not now a requisite skill,\nbut promotions would not escape this necessity! So, now reverting back to the subject of women in tech, American\nleadership is in deep peril without more female insight. I will finish by citing that Ares, the violent, untamed\nGreek\n<i>god of war</i>, cannot always drive the Capitalist engine; because She, Athena, the\n<i>goddess of intelligence</i> represents true strategy!</p>\n\n<p>1.\n<a href=\"https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html\" target=\"_blank\">https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html</a>\n</p>\n\n<p>2.\n<a href=\"https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages\" target=\"_blank\">https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages</a>\n</p>\n\n<p>3.\n<a href=\"https://www.aauw.org/research/why-so-few/\" target=\"_blank\">https://www.aauw.org/research/why-so-few/</a>\n</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-24\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Web Dev Affairs</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 24-25, 2018\n<br /> Weekend\n</h6>\n\n<h6 class=\"chapternumber dailytitle\">Joys of Automation</h6>\n\n<p class=\"firstparagraph\">While coding up a better shell for this website, I thought it&#39;s remarkable how our lives get easier and easier\nwith each passing year of tech. Using JavaScript--the primordial web-coding language--I marvel at the convenience\nof delegating mundande coding stuff to taskrunners, like\n<i>Gulp</i>--a programmable package manager that &quot;bundles&quot; up the libraries to be used in the app. It is\ntruly a joy!</p>\n\n<p>I write four styling\n<i>functions</i>, with about 16\n<i>variables</i> and voil&agrave;! I finish in 3 hours what would have taken me 15 hours, then another 5 hours a month\nfor upkeep. Instead, now, it&#39;s as though I wind up the clock, and need only periodically check, and perhaps\nupdate a variable or two ... Technology. I&#39;m gushing for joy.</p>\n\n<p>This was mere JavaScript--with a truly\n<i>Turing Complete</i>--pan-algorithm status--languages, the possibilities are 100-fold with Python language library\ncollection; this library collection includes NASA modules, mathematical proofs, and limitless uses from web-scraping\nfor unstructured data to an excellent data visualization collection. Sometimes I feel like I&#39;m in the Library\nof Congress, and better yet because, PIP, the Python package manager acts and automates like a cyborg librarian,\nfor lack of better imagery.</p>\n\n<p>I just have so much joy watching a project come to life, and it&#39;s even a greater delight if this project comes\nto life and stays alive, through the joys of automation!</p>\n\n<p>&nbsp;</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-26\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 26, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">Cryptocurrency&#39;s Cumbersome Carbon Footprint</h6>\n\n<p class=\"firstparagraph\">I must confess that on the very day that Our Daily Tech Blog gets an under-the-head make-over for security&#39;s\nsake, I wrote the new formatting file right over today&#39;s post. Amazing, and the two occurred nearly simultaneously\nas I worked on them, their paths crossed and poof, gone! Same platform, and I paid the price! Whether I change my\nways is yet to be seen, but I shall continue with my original theme for the day, namely, Sustainability, a.k.a.\nCarbon Footprint.</p>\n\n<p class=\"quote\">Power consumption is one of the major costs of bitcoin mining, as dedicated machines crunch the algorithms that build\na record of every single bitcoin transaction and are rewarded with tiny fractions of a bitcoin for their efforts.\n<sup id=\"explain\">1</sup>\n</p>\n\n<p>Today I have a mild Critique and Praise for the blockchain sustainability problem caused by sky-high electricity\nbills! Computer algorithms do waste electricity, not like your Widescreen. More electricity is gobbled up by small\nand large mining operations in nearly every country than small nations!\n<sup id=\"electricity\">1</sup>. Ethereum, Bitcoin and a handful of other &quot;Proof-of-Work&quot; designs require electricity because\nthe investment in equipment itself is investment, but more importantly, two-way incentivation for mining drives\nthe system, and the scarcity demand through difficulty computations.</p>\n\n<p>So, is the electricity consumption really\n<i>correlated</i> with the value, scarcity, of the currency? Yes. Digiconomist--a cryptocurrency analysis site\n<sup\n  id=\"digiconomist\">3</sup> estimates\n  <i>each</i>Ethereum transaction represents a 45 Kilowatt-hour of electricity&#39;s mining. (A visa credit card transaction\n  is 0.00651 kWh. The entire Ethereum global blockchain could be &quot;using as much as 4.2 Terawatt-hours (tWh),\n  or slightly more than the country of Cyprus\n  <sup id=\"cyprus\">1</sup>.&quot; So, electricity comparisons are telling, but how does this relate to its environment impact, sustainability\n  itself?</p>\n\n<p>Carbon Footprint, our energy consumption index, can be compared to another element of scarcity, which dictates fluctuations\nin value: Gold. According to\n<i>Digiconomist</i>, an average household&#39;s Carbon Footprint is about 10 tons of CO2 per year. The article does\nthe math for us very succinctly:</p>\n\n<p class=\"quote\">On top of this, we can find that the process of mining Bitcoin isn&rsquo;t just more energy-intensive, but also has\na bigger environmental impact. To reach that conclusion, we first need to estimate the carbon footprint for both.\nFor Bitcoin we can, again, get this number from the Bitcoin Energy Consumption Index. For gold, we assume a carbon\nfootprint of 20 tons of CO2e per every kilogram of gold mined\n<sup id=\"digiconomist2\">3</sup>.</p>\n\n<p>The article continues to clarify that 33,000 kilograms of CO2 per unit mines (comparatively, one Bitcoin&#39;s worth\nof Gold is 4,000 kilograms of CO2). At the end of the day, the electricity costs--if not sustainable long-term--could\nspell trouble. Hence, the three S&#39;s, mentioned last, sustainability is perhaps a larger issue than blockchain\nSecurity and Scalability challenges. Again, this is a problem that the third largest cryptocurrency does not have:\n<i>Ripple</i>, which does not bear a carbon footprint\n<sup id=\"ripple\">4</sup>.</p>\n\n<p>&nbsp;</p>\n\n<p>0.\n<a href=\"https://www.cnet.com/how-to/bitcoin-ethereum-or-litecoin-which-cryptocurrency-is-best-for-you/\" target=\"_blank\">https://www.cnet.com/how-to/bitcoin-ethereum-or-litecoin-which-cryptocurrency-is-best-for-you/</a>\n<br /> For those new to cryptocurrencies, this is a fairly succinct article to cryptocurrencies, and their underlying\nstructure.</p>\n\n<p>1.\n<a href=\"https://motherboard.vice.com/en_us/article/d3zn9a/ethereum-mining-transaction-electricity-consumption-bitcoin\"\n  target=\"_blank\">https://motherboard.vice.com/en_us/article/d3zn9a/ethereum-mining-transaction-electricity-consumption-bitcoin</a>\n</p>\n\n<p>2.\n<a href=\"http://www.wired.co.uk/article/how-much-energy-does-bitcoin-mining-really-use\" target=\"_blank\">http://www.wired.co.uk/article/how-much-energy-does-bitcoin-mining-really-use</a>\n</p>\n\n<p>3.\n<a href=\"https://digiconomist.net/bitcoin-mining-more-polluting-than-gold-mining\" target=\"_blank\">https://digiconomist.net/bitcoin-mining-more-polluting-than-gold-mining</a>\n</p>\n\n<p>4.\n<a href=\"https://ripple.com/xrp/\" target=\"_blank\">https://ripple.com/xrp/</a>\n</p>\n\n<p>&nbsp;</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-27\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Web Dev Affairs</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 27, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">After Yesterday&#39;s Scathing Post, A Look at my own Carbon Footprint</h6>\n\n<p class=\"firstparagraph\">In my reflections about environment sustainability issues, I confess I&#39;m sort of a hypocrite ... The whole matter\nthat caused my own introspection begins with my usual daily vexation: Tangles of wires!\n<br /> &nbsp; ... I&#39;ve been having electricity issues, here as of late ...</p>\n\n<p>On one side, my tiny Yoga Ultrabook usually likes to charge just fine with my phone charger--if I&#39;m stuck without\nmy charger. And due to an untimely end to the charger, I needed a replacement. So, singular errand of the day was\na trip to Best Buy to peruse for a 45-Watt USB-C charger ( the new oval charging port on Samsung 8&#39;s, LG G6&#39;s\nand newer Apple products).</p>\n\n<p>Meanwhile, my credit-card sized Raspberry Pi computer runs on an old-school USB charger--a whole Linux Server Tower\non a cell-phone charger. Then, we have my trusty Dell (actual) Tower with 16 Gigs of RAM, 2-terabytes, etc. that\nalso seems to need an extra fan to stay cool--probably the sustainability of 100 Raspberry computers. My entire\ncarbon footprint changes more with the electrical products that I use, than my vehicle! Well, I also confess my\nJeep Cherokee can&#39;t even boast 20 miles per hour ... oops, conscience pangs, ouch ... Well, hypocritical, slightly,\nbut found not guilty since I&#39;m a bike-commuter for life!</p>\n\n<p>&nbsp;</p>\n</div>\n\n<div class=\"feb 18-03 -12\" id=\"18-02-28\">\n<hr />\n<button>\n<a href=\"#top\">Top</a>\n</button>&nbsp;\n<h5 class=\"title dailytech\">OUR DAILY TECH</h5>\n\n<h5 class=\"subdailytech\">Musing Blockchain</h5>\n\n<p class=\"author\">by Thomas Maestas, MA</p>\n\n<h6 class=\"chapternumber\">Feb 28, 2018</h6>\n\n<h6 class=\"chapternumber dailytitle\">One Last Word about Bitcoin&#39;s Carbon Footprint</h6>\n\n<p class=\"firstparagraph\">Environmental Sustainability, again, and a higher-level view of the dilemmea...I couldn&#39;t resist:\n<br /> Bitcoin&#39;s Initial Coin Offering was 2011 or so, then Ethereum, with Ether for currency was 2015; These two,\never so prescient designs, also have their Achilles Heal. These two are\n<strong>&quot;Proof of Work&quot; currency algorithsms</strong>. This means that the &quot;Demand&quot; side of supply-and-demand,\nderives from\n<i>difficulty levels</i> of crypto-blocks to mine. So, miners are incentivized to spend $1500 on a semi-mediocre-good\nmining rig (which is basically 20 NVIDIA Graphics Cards tied together to stack of two-by-fours with lots of fans\n... erhem, sustainability?...</p>\n\n<p>And for each block that is &quot;solved&quot;, hence the block being validated, and somebody&#39;s cryptocurrency\npurchase/transaction is resolved! (takes about 12 minutes for the whole global blockchain to cycle, and Ethereum\nis less than a minute). So, the whole cycle continues, churning through coal- and carbon-stained hands of the electricity\nfed to these crypto-mining rigs\n<sup>1</sup>. For many it&#39;s a hobby, like the British Hobbyists&#39; love for ham- and short-wave radio setups, yet\nthis profitable, yet particular hobby resembles the 1870&#39;s coal factory smoke stacks in South London!</p>\n\n<p>Let&#39;s face it, if Ethereum is able to successfully hard-fork to a Proof-of-Stake system soon--and Vitalik Buterin\nand his crew assure us it is coming\n<sup>2</sup>--then great--problem solved, everything eventually converts to Ethereum. If\n<i>not</i>they face an existential threat. Because, in a more enlightened ten years from now, those mining depots\n<i>would</i> look like unfettered factory smoke-stacks. Proof-of-Stack, whose currency value is not set to difficult\nof algorithm puzzle (hence,\n<i>proof-of-work</i>, but rather to ownership of &quot;voting pools&quot;, which is a\n<i>\n  <strong>Consensus-Based Blockchain algorithm</strong>\n</i> [Complex subject best reserved for a rainy day, or better yet, no day! I may revisit this alternative in a funner\nway, here&#39;s a glimpse from Vitalk&#39;s @VitalikButerin tweet yesterday:</p>\n\n<p class=\"quote\">Question for mathematicians: is there a assumed-to-be-normal number (ie. digits are random, like pi or e) where you\ncan calculate the nth digit in log(n) (or even polylog(n)) time? If so, then H(x) = digits[x ... x+100] seems like\nit would be a cool cryptographic hash algo.</p>\n\n<p>Now, I am by no means a detective, but by the sound of those tweets, the Proof-of-Work algorithm seems to still be\nof utmost importance ...</p>\n\n<p>1.\n<a href=\"https://blockexplorer.com/news/ethereum-launches-casper-testnet-paving-way-proof-stake/\" target=\"_blank\">https://blockexplorer.com/news/ethereum-launches-casper-testnet-paving-way-proof-stake/</a> and also,\n<a href=\"https://www.trustnodes.com/2017/11/28/ethereums-proof-stake-casper-testnet-nears-launch\"\n  target=\"_blank\">https://www.trustnodes.com/2017/11/28/ethereums-proof-stake-casper-testnet-nears-launch</a>\n</p>\n</div>\n\n<div>\n<p id=\"pageend\" style=\"padding-bottom:150px;\">&nbsp;</p>\n</div>\n<button><a href=\"#top\">Top of Page</a></button>\n";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	/* 
	import App from './components/app';  
	import popper from './popper';
	import february from "../data/february"; 
	*/
	
	var data = {
	  type: "line",
	  //data:formatedData,
	  data: a2c(rawData),
	  options: {
	    responsive: true,
	    text: "Average Polllution in Three Cities",
	    title: {
	      display: true,
	      text: "Average Temperature: Austin, San Francisco, New York"
	    },
	    hover: {
	      mode: 'label'
	    },
	    tooltips: {
	      mode: 'label' //single
	    }
	  }
	};
	
	var blogs = [{ posts: 'February' }, { posts: 'March' }];
	$.each(blogs, function (key, value) {
	  $('.blogs').append('<h2>' + value.posts + '</h2>');
	});
	console.log(blogs.posts);
	
	console.log('dom-loader');
	var metaBlog = {
	  "dailytitle": "The Sharing Economy Hand-in-Hand with the Market Economy, Part II: Internet of Things",
	  "chapternumber": "March 12, 2018",
	  "weekend": false,
	  "divs": ['18-03-10', '18-03-10', '18-03-11', '18-03-12', '18-03-13', '18-03-14', '18-03-15', '18-03-16', '18-03-17', '18-03-18', '18-03-19', '18-03-20', '18-03-21', '18-03-22', '18-03-23', '18-03-24', '18-03-25', '18-03-26', '18-03-27', '18-03-28', '18-03-29', '18-03-30']
	};
	
	// ReactDom.render(<App />, document.getElementById('react'))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}
	
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;
	}
	
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): tab.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */
	var Tab = function ($) {
	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */
	  var NAME = 'tab';
	  var VERSION = '4.0.0';
	  var DATA_KEY = 'bs.tab';
	  var EVENT_KEY = "." + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $.fn[NAME];
	  var TRANSITION_DURATION = 150;
	  var Event = {
	    HIDE: "hide" + EVENT_KEY,
	    HIDDEN: "hidden" + EVENT_KEY,
	    SHOW: "show" + EVENT_KEY,
	    SHOWN: "shown" + EVENT_KEY,
	    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
	  };
	  var ClassName = {
	    DROPDOWN_MENU: 'dropdown-menu',
	    ACTIVE: 'active',
	    DISABLED: 'disabled',
	    FADE: 'fade',
	    SHOW: 'show'
	  };
	  var Selector = {
	    DROPDOWN: '.dropdown',
	    NAV_LIST_GROUP: '.nav, .list-group',
	    ACTIVE: '.active',
	    ACTIVE_UL: '> li > .active',
	    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
	    DROPDOWN_TOGGLE: '.dropdown-toggle',
	    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */
	
	  };
	
	  var Tab =
	  /*#__PURE__*/
	  function () {
	    function Tab(element) {
	      this._element = element;
	    } // Getters
	
	
	    var _proto = Tab.prototype;
	
	    // Public
	    _proto.show = function show() {
	      var _this = this;
	
	      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
	        return;
	      }
	
	      var target;
	      var previous;
	      var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
	      var selector = Util.getSelectorFromElement(this._element);
	
	      if (listElement) {
	        var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
	        previous = $.makeArray($(listElement).find(itemSelector));
	        previous = previous[previous.length - 1];
	      }
	
	      var hideEvent = $.Event(Event.HIDE, {
	        relatedTarget: this._element
	      });
	      var showEvent = $.Event(Event.SHOW, {
	        relatedTarget: previous
	      });
	
	      if (previous) {
	        $(previous).trigger(hideEvent);
	      }
	
	      $(this._element).trigger(showEvent);
	
	      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
	        return;
	      }
	
	      if (selector) {
	        target = $(selector)[0];
	      }
	
	      this._activate(this._element, listElement);
	
	      var complete = function complete() {
	        var hiddenEvent = $.Event(Event.HIDDEN, {
	          relatedTarget: _this._element
	        });
	        var shownEvent = $.Event(Event.SHOWN, {
	          relatedTarget: previous
	        });
	        $(previous).trigger(hiddenEvent);
	        $(_this._element).trigger(shownEvent);
	      };
	
	      if (target) {
	        this._activate(target, target.parentNode, complete);
	      } else {
	        complete();
	      }
	    };
	
	    _proto.dispose = function dispose() {
	      $.removeData(this._element, DATA_KEY);
	      this._element = null;
	    }; // Private
	
	
	    _proto._activate = function _activate(element, container, callback) {
	      var _this2 = this;
	
	      var activeElements;
	
	      if (container.nodeName === 'UL') {
	        activeElements = $(container).find(Selector.ACTIVE_UL);
	      } else {
	        activeElements = $(container).children(Selector.ACTIVE);
	      }
	
	      var active = activeElements[0];
	      var isTransitioning = callback && Util.supportsTransitionEnd() && active && $(active).hasClass(ClassName.FADE);
	
	      var complete = function complete() {
	        return _this2._transitionComplete(element, active, callback);
	      };
	
	      if (active && isTransitioning) {
	        $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
	      } else {
	        complete();
	      }
	    };
	
	    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
	      if (active) {
	        $(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
	        var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];
	
	        if (dropdownChild) {
	          $(dropdownChild).removeClass(ClassName.ACTIVE);
	        }
	
	        if (active.getAttribute('role') === 'tab') {
	          active.setAttribute('aria-selected', false);
	        }
	      }
	
	      $(element).addClass(ClassName.ACTIVE);
	
	      if (element.getAttribute('role') === 'tab') {
	        element.setAttribute('aria-selected', true);
	      }
	
	      Util.reflow(element);
	      $(element).addClass(ClassName.SHOW);
	
	      if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
	        var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
	
	        if (dropdownElement) {
	          $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
	        }
	
	        element.setAttribute('aria-expanded', true);
	      }
	
	      if (callback) {
	        callback();
	      }
	    }; // Static
	
	
	    Tab._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var $this = $(this);
	        var data = $this.data(DATA_KEY);
	
	        if (!data) {
	          data = new Tab(this);
	          $this.data(DATA_KEY, data);
	        }
	
	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }
	
	          data[config]();
	        }
	      });
	    };
	
	    _createClass(Tab, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION;
	      }
	    }]);
	
	    return Tab;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */
	
	  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
	    event.preventDefault();
	
	    Tab._jQueryInterface.call($(this), 'show');
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */
	
	  $.fn[NAME] = Tab._jQueryInterface;
	  $.fn[NAME].Constructor = Tab;
	
	  $.fn[NAME].noConflict = function () {
	    $.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Tab._jQueryInterface;
	  };
	
	  return Tab;
	}($);
	//# sourceMappingURL=tab.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	  * Bootstrap v4.0.0 (https://getbootstrap.com)
	  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
	  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	  */
	!function (t, e) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, __webpack_require__(6)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(t.bootstrap = {}, t.jQuery);
	}(undefined, function (t, e) {
	  "use strict";
	  function n(t, e) {
	    for (var n = 0; n < e.length; n++) {
	      var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
	    }
	  }function i(t, e, i) {
	    return e && n(t.prototype, e), i && n(t, i), t;
	  }function r() {
	    return (r = Object.assign || function (t) {
	      for (var e = 1; e < arguments.length; e++) {
	        var n = arguments[e];for (var i in n) {
	          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
	        }
	      }return t;
	    }).apply(this, arguments);
	  }for (var o, s, a, l, c, h, f, u, d, p, g, m, _, v, E, y, b, T, C, w, I, A, D, S, O, N, k = function (t) {
	    var e = !1;function n(e) {
	      var n = this,
	          r = !1;return t(this).one(i.TRANSITION_END, function () {
	        r = !0;
	      }), setTimeout(function () {
	        r || i.triggerTransitionEnd(n);
	      }, e), this;
	    }var i = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
	        do {
	          t += ~~(1e6 * Math.random());
	        } while (document.getElementById(t));return t;
	      }, getSelectorFromElement: function getSelectorFromElement(e) {
	        var n,
	            i = e.getAttribute("data-target");i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));try {
	          return t(document).find(i).length > 0 ? i : null;
	        } catch (t) {
	          return null;
	        }
	      }, reflow: function reflow(t) {
	        return t.offsetHeight;
	      }, triggerTransitionEnd: function triggerTransitionEnd(n) {
	        t(n).trigger(e.end);
	      }, supportsTransitionEnd: function supportsTransitionEnd() {
	        return Boolean(e);
	      }, isElement: function isElement(t) {
	        return (t[0] || t).nodeType;
	      }, typeCheckConfig: function typeCheckConfig(t, e, n) {
	        for (var r in n) {
	          if (Object.prototype.hasOwnProperty.call(n, r)) {
	            var o = n[r],
	                s = e[r],
	                a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".');
	          }
	        }var l;
	      } };return e = ("undefined" == typeof window || !window.QUnit) && { end: "transitionend" }, t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = { bindType: e.end, delegateType: e.end, handle: function handle(e) {
	        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
	      } }), i;
	  }(e = e && e.hasOwnProperty("default") ? e.default : e), L = (s = "alert", l = "." + (a = "bs.alert"), c = (o = e).fn[s], h = { CLOSE: "close" + l, CLOSED: "closed" + l, CLICK_DATA_API: "click" + l + ".data-api" }, f = "alert", u = "fade", d = "show", p = function () {
	    function t(t) {
	      this._element = t;
	    }var e = t.prototype;return e.close = function (t) {
	      t = t || this._element;var e = this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
	    }, e.dispose = function () {
	      o.removeData(this._element, a), this._element = null;
	    }, e._getRootElement = function (t) {
	      var e = k.getSelectorFromElement(t),
	          n = !1;return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n;
	    }, e._triggerCloseEvent = function (t) {
	      var e = o.Event(h.CLOSE);return o(t).trigger(e), e;
	    }, e._removeElement = function (t) {
	      var e = this;o(t).removeClass(d), k.supportsTransitionEnd() && o(t).hasClass(u) ? o(t).one(k.TRANSITION_END, function (n) {
	        return e._destroyElement(t, n);
	      }).emulateTransitionEnd(150) : this._destroyElement(t);
	    }, e._destroyElement = function (t) {
	      o(t).detach().trigger(h.CLOSED).remove();
	    }, t._jQueryInterface = function (e) {
	      return this.each(function () {
	        var n = o(this),
	            i = n.data(a);i || (i = new t(this), n.data(a, i)), "close" === e && i[e](this);
	      });
	    }, t._handleDismiss = function (t) {
	      return function (e) {
	        e && e.preventDefault(), t.close(this);
	      };
	    }, i(t, null, [{ key: "VERSION", get: function get() {
	        return "4.0.0";
	      } }]), t;
	  }(), o(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), o.fn[s] = p._jQueryInterface, o.fn[s].Constructor = p, o.fn[s].noConflict = function () {
	    return o.fn[s] = c, p._jQueryInterface;
	  }, p), P = (m = "button", v = "." + (_ = "bs.button"), E = ".data-api", y = (g = e).fn[m], b = "active", T = "btn", C = "focus", w = '[data-toggle^="button"]', I = '[data-toggle="buttons"]', A = "input", D = ".active", S = ".btn", O = { CLICK_DATA_API: "click" + v + E, FOCUS_BLUR_DATA_API: "focus" + v + E + " blur" + v + E }, N = function () {
	    function t(t) {
	      this._element = t;
	    }var e = t.prototype;return e.toggle = function () {
	      var t = !0,
	          e = !0,
	          n = g(this._element).closest(I)[0];if (n) {
	        var i = g(this._element).find(A)[0];if (i) {
	          if ("radio" === i.type) if (i.checked && g(this._element).hasClass(b)) t = !1;else {
	            var r = g(n).find(D)[0];r && g(r).removeClass(b);
	          }if (t) {
	            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;i.checked = !g(this._element).hasClass(b), g(i).trigger("change");
	          }i.focus(), e = !1;
	        }
	      }e && this._element.setAttribute("aria-pressed", !g(this._element).hasClass(b)), t && g(this._element).toggleClass(b);
	    }, e.dispose = function () {
	      g.removeData(this._element, _), this._element = null;
	    }, t._jQueryInterface = function (e) {
	      return this.each(function () {
	        var n = g(this).data(_);n || (n = new t(this), g(this).data(_, n)), "toggle" === e && n[e]();
	      });
	    }, i(t, null, [{ key: "VERSION", get: function get() {
	        return "4.0.0";
	      } }]), t;
	  }(), g(document).on(O.CLICK_DATA_API, w, function (t) {
	    t.preventDefault();var e = t.target;g(e).hasClass(T) || (e = g(e).closest(S)), N._jQueryInterface.call(g(e), "toggle");
	  }).on(O.FOCUS_BLUR_DATA_API, w, function (t) {
	    var e = g(t.target).closest(S)[0];g(e).toggleClass(C, /^focus(in)?$/.test(t.type));
	  }), g.fn[m] = N._jQueryInterface, g.fn[m].Constructor = N, g.fn[m].noConflict = function () {
	    return g.fn[m] = y, N._jQueryInterface;
	  }, N), x = function (t) {
	    var e = "carousel",
	        n = "bs.carousel",
	        o = "." + n,
	        s = t.fn[e],
	        a = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
	        l = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
	        c = "next",
	        h = "prev",
	        f = "left",
	        u = "right",
	        d = { SLIDE: "slide" + o, SLID: "slid" + o, KEYDOWN: "keydown" + o, MOUSEENTER: "mouseenter" + o, MOUSELEAVE: "mouseleave" + o, TOUCHEND: "touchend" + o, LOAD_DATA_API: "load" + o + ".data-api", CLICK_DATA_API: "click" + o + ".data-api" },
	        p = "carousel",
	        g = "active",
	        m = "slide",
	        _ = "carousel-item-right",
	        v = "carousel-item-left",
	        E = "carousel-item-next",
	        y = "carousel-item-prev",
	        b = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
	        T = function () {
	      function s(e, n) {
	        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(b.INDICATORS)[0], this._addEventListeners();
	      }var T = s.prototype;return T.next = function () {
	        this._isSliding || this._slide(c);
	      }, T.nextWhenVisible = function () {
	        !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next();
	      }, T.prev = function () {
	        this._isSliding || this._slide(h);
	      }, T.pause = function (e) {
	        e || (this._isPaused = !0), t(this._element).find(b.NEXT_PREV)[0] && k.supportsTransitionEnd() && (k.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
	      }, T.cycle = function (t) {
	        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
	      }, T.to = function (e) {
	        var n = this;this._activeElement = t(this._element).find(b.ACTIVE_ITEM)[0];var i = this._getItemIndex(this._activeElement);if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(d.SLID, function () {
	          return n.to(e);
	        });else {
	          if (i === e) return this.pause(), void this.cycle();var r = e > i ? c : h;this._slide(r, this._items[e]);
	        }
	      }, T.dispose = function () {
	        t(this._element).off(o), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
	      }, T._getConfig = function (t) {
	        return t = r({}, a, t), k.typeCheckConfig(e, t, l), t;
	      }, T._addEventListeners = function () {
	        var e = this;this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
	          return e._keydown(t);
	        }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function (t) {
	          return e.pause(t);
	        }).on(d.MOUSELEAVE, function (t) {
	          return e.cycle(t);
	        }), ("ontouchstart" in document.documentElement) && t(this._element).on(d.TOUCHEND, function () {
	          e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
	            return e.cycle(t);
	          }, 500 + e._config.interval);
	        }));
	      }, T._keydown = function (t) {
	        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
	            t.preventDefault(), this.prev();break;case 39:
	            t.preventDefault(), this.next();}
	      }, T._getItemIndex = function (e) {
	        return this._items = t.makeArray(t(e).parent().find(b.ITEM)), this._items.indexOf(e);
	      }, T._getItemByDirection = function (t, e) {
	        var n = t === c,
	            i = t === h,
	            r = this._getItemIndex(e),
	            o = this._items.length - 1;if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;var s = (r + (t === h ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
	      }, T._triggerSlideEvent = function (e, n) {
	        var i = this._getItemIndex(e),
	            r = this._getItemIndex(t(this._element).find(b.ACTIVE_ITEM)[0]),
	            o = t.Event(d.SLIDE, { relatedTarget: e, direction: n, from: r, to: i });return t(this._element).trigger(o), o;
	      }, T._setActiveIndicatorElement = function (e) {
	        if (this._indicatorsElement) {
	          t(this._indicatorsElement).find(b.ACTIVE).removeClass(g);var n = this._indicatorsElement.children[this._getItemIndex(e)];n && t(n).addClass(g);
	        }
	      }, T._slide = function (e, n) {
	        var i,
	            r,
	            o,
	            s = this,
	            a = t(this._element).find(b.ACTIVE_ITEM)[0],
	            l = this._getItemIndex(a),
	            h = n || a && this._getItemByDirection(e, a),
	            p = this._getItemIndex(h),
	            T = Boolean(this._interval);if (e === c ? (i = v, r = E, o = f) : (i = _, r = y, o = u), h && t(h).hasClass(g)) this._isSliding = !1;else if (!this._triggerSlideEvent(h, o).isDefaultPrevented() && a && h) {
	          this._isSliding = !0, T && this.pause(), this._setActiveIndicatorElement(h);var C = t.Event(d.SLID, { relatedTarget: h, direction: o, from: l, to: p });k.supportsTransitionEnd() && t(this._element).hasClass(m) ? (t(h).addClass(r), k.reflow(h), t(a).addClass(i), t(h).addClass(i), t(a).one(k.TRANSITION_END, function () {
	            t(h).removeClass(i + " " + r).addClass(g), t(a).removeClass(g + " " + r + " " + i), s._isSliding = !1, setTimeout(function () {
	              return t(s._element).trigger(C);
	            }, 0);
	          }).emulateTransitionEnd(600)) : (t(a).removeClass(g), t(h).addClass(g), this._isSliding = !1, t(this._element).trigger(C)), T && this.cycle();
	        }
	      }, s._jQueryInterface = function (e) {
	        return this.each(function () {
	          var i = t(this).data(n),
	              o = r({}, a, t(this).data());"object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (o = r({}, o, e));var l = "string" == typeof e ? e : o.slide;if (i || (i = new s(this, o), t(this).data(n, i)), "number" == typeof e) i.to(e);else if ("string" == typeof l) {
	            if ("undefined" == typeof i[l]) throw new TypeError('No method named "' + l + '"');i[l]();
	          } else o.interval && (i.pause(), i.cycle());
	        });
	      }, s._dataApiClickHandler = function (e) {
	        var i = k.getSelectorFromElement(this);if (i) {
	          var o = t(i)[0];if (o && t(o).hasClass(p)) {
	            var a = r({}, t(o).data(), t(this).data()),
	                l = this.getAttribute("data-slide-to");l && (a.interval = !1), s._jQueryInterface.call(t(o), a), l && t(o).data(n).to(l), e.preventDefault();
	          }
	        }
	      }, i(s, null, [{ key: "VERSION", get: function get() {
	          return "4.0.0";
	        } }, { key: "Default", get: function get() {
	          return a;
	        } }]), s;
	    }();return t(document).on(d.CLICK_DATA_API, b.DATA_SLIDE, T._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
	      t(b.DATA_RIDE).each(function () {
	        var e = t(this);T._jQueryInterface.call(e, e.data());
	      });
	    }), t.fn[e] = T._jQueryInterface, t.fn[e].Constructor = T, t.fn[e].noConflict = function () {
	      return t.fn[e] = s, T._jQueryInterface;
	    }, T;
	  }(e), R = function (t) {
	    var e = "collapse",
	        n = "bs.collapse",
	        o = "." + n,
	        s = t.fn[e],
	        a = { toggle: !0, parent: "" },
	        l = { toggle: "boolean", parent: "(string|element)" },
	        c = { SHOW: "show" + o, SHOWN: "shown" + o, HIDE: "hide" + o, HIDDEN: "hidden" + o, CLICK_DATA_API: "click" + o + ".data-api" },
	        h = "show",
	        f = "collapse",
	        u = "collapsing",
	        d = "collapsed",
	        p = "width",
	        g = "height",
	        m = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
	        _ = function () {
	      function o(e, n) {
	        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));for (var i = t(m.DATA_TOGGLE), r = 0; r < i.length; r++) {
	          var o = i[r],
	              s = k.getSelectorFromElement(o);null !== s && t(s).filter(e).length > 0 && (this._selector = s, this._triggerArray.push(o));
	        }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
	      }var s = o.prototype;return s.toggle = function () {
	        t(this._element).hasClass(h) ? this.hide() : this.show();
	      }, s.show = function () {
	        var e,
	            i,
	            r = this;if (!this._isTransitioning && !t(this._element).hasClass(h) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(m.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (i = t(e).not(this._selector).data(n)) && i._isTransitioning))) {
	          var s = t.Event(c.SHOW);if (t(this._element).trigger(s), !s.isDefaultPrevented()) {
	            e && (o._jQueryInterface.call(t(e).not(this._selector), "hide"), i || t(e).data(n, null));var a = this._getDimension();t(this._element).removeClass(f).addClass(u), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);var l = function l() {
	              t(r._element).removeClass(u).addClass(f).addClass(h), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(c.SHOWN);
	            };if (k.supportsTransitionEnd()) {
	              var p = "scroll" + (a[0].toUpperCase() + a.slice(1));t(this._element).one(k.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[p] + "px";
	            } else l();
	          }
	        }
	      }, s.hide = function () {
	        var e = this;if (!this._isTransitioning && t(this._element).hasClass(h)) {
	          var n = t.Event(c.HIDE);if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
	            var i = this._getDimension();if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", k.reflow(this._element), t(this._element).addClass(u).removeClass(f).removeClass(h), this._triggerArray.length > 0) for (var r = 0; r < this._triggerArray.length; r++) {
	              var o = this._triggerArray[r],
	                  s = k.getSelectorFromElement(o);if (null !== s) t(s).hasClass(h) || t(o).addClass(d).attr("aria-expanded", !1);
	            }this.setTransitioning(!0);var a = function a() {
	              e.setTransitioning(!1), t(e._element).removeClass(u).addClass(f).trigger(c.HIDDEN);
	            };this._element.style[i] = "", k.supportsTransitionEnd() ? t(this._element).one(k.TRANSITION_END, a).emulateTransitionEnd(600) : a();
	          }
	        }
	      }, s.setTransitioning = function (t) {
	        this._isTransitioning = t;
	      }, s.dispose = function () {
	        t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
	      }, s._getConfig = function (t) {
	        return (t = r({}, a, t)).toggle = Boolean(t.toggle), k.typeCheckConfig(e, t, l), t;
	      }, s._getDimension = function () {
	        return t(this._element).hasClass(p) ? p : g;
	      }, s._getParent = function () {
	        var e = this,
	            n = null;k.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return t(n).find(i).each(function (t, n) {
	          e._addAriaAndCollapsedClass(o._getTargetFromElement(n), [n]);
	        }), n;
	      }, s._addAriaAndCollapsedClass = function (e, n) {
	        if (e) {
	          var i = t(e).hasClass(h);n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i);
	        }
	      }, o._getTargetFromElement = function (e) {
	        var n = k.getSelectorFromElement(e);return n ? t(n)[0] : null;
	      }, o._jQueryInterface = function (e) {
	        return this.each(function () {
	          var i = t(this),
	              s = i.data(n),
	              l = r({}, a, i.data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e);if (!s && l.toggle && /show|hide/.test(e) && (l.toggle = !1), s || (s = new o(this, l), i.data(n, s)), "string" == typeof e) {
	            if ("undefined" == typeof s[e]) throw new TypeError('No method named "' + e + '"');s[e]();
	          }
	        });
	      }, i(o, null, [{ key: "VERSION", get: function get() {
	          return "4.0.0";
	        } }, { key: "Default", get: function get() {
	          return a;
	        } }]), o;
	    }();return t(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function (e) {
	      "A" === e.currentTarget.tagName && e.preventDefault();var i = t(this),
	          r = k.getSelectorFromElement(this);t(r).each(function () {
	        var e = t(this),
	            r = e.data(n) ? "toggle" : i.data();_._jQueryInterface.call(e, r);
	      });
	    }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
	      return t.fn[e] = s, _._jQueryInterface;
	    }, _;
	  }(e), j = "undefined" != typeof window && "undefined" != typeof document, H = ["Edge", "Trident", "Firefox"], M = 0, W = 0; W < H.length; W += 1) {
	    if (j && navigator.userAgent.indexOf(H[W]) >= 0) {
	      M = 1;break;
	    }
	  }var U = j && window.Promise ? function (t) {
	    var e = !1;return function () {
	      e || (e = !0, window.Promise.resolve().then(function () {
	        e = !1, t();
	      }));
	    };
	  } : function (t) {
	    var e = !1;return function () {
	      e || (e = !0, setTimeout(function () {
	        e = !1, t();
	      }, M));
	    };
	  };function B(t) {
	    return t && "[object Function]" === {}.toString.call(t);
	  }function F(t, e) {
	    if (1 !== t.nodeType) return [];var n = getComputedStyle(t, null);return e ? n[e] : n;
	  }function K(t) {
	    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
	  }function V(t) {
	    if (!t) return document.body;switch (t.nodeName) {case "HTML":case "BODY":
	        return t.ownerDocument.body;case "#document":
	        return t.body;}var e = F(t),
	        n = e.overflow,
	        i = e.overflowX,
	        r = e.overflowY;return (/(auto|scroll)/.test(n + r + i) ? t : V(K(t))
	    );
	  }function Q(t) {
	    var e = t && t.offsetParent,
	        n = e && e.nodeName;return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) && "static" === F(e, "position") ? Q(e) : e : t ? t.ownerDocument.documentElement : document.documentElement;
	  }function Y(t) {
	    return null !== t.parentNode ? Y(t.parentNode) : t;
	  }function G(t, e) {
	    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
	        i = n ? t : e,
	        r = n ? e : t,
	        o = document.createRange();o.setStart(i, 0), o.setEnd(r, 0);var s,
	        a,
	        l = o.commonAncestorContainer;if (t !== l && e !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && Q(s.firstElementChild) !== s ? Q(l) : l;var c = Y(t);return c.host ? G(c.host, e) : G(t, Y(e).host);
	  }function q(t) {
	    var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
	        n = t.nodeName;if ("BODY" === n || "HTML" === n) {
	      var i = t.ownerDocument.documentElement;return (t.ownerDocument.scrollingElement || i)[e];
	    }return t[e];
	  }function z(t, e) {
	    var n = "x" === e ? "Left" : "Top",
	        i = "Left" === n ? "Right" : "Bottom";return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10);
	  }var X = void 0,
	      Z = function Z() {
	    return void 0 === X && (X = -1 !== navigator.appVersion.indexOf("MSIE 10")), X;
	  };function J(t, e, n, i) {
	    return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Z() ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0);
	  }function $() {
	    var t = document.body,
	        e = document.documentElement,
	        n = Z() && getComputedStyle(e);return { height: J("Height", t, e, n), width: J("Width", t, e, n) };
	  }var tt = function tt(t, e) {
	    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	  },
	      et = function () {
	    function t(t, e) {
	      for (var n = 0; n < e.length; n++) {
	        var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
	      }
	    }return function (e, n, i) {
	      return n && t(e.prototype, n), i && t(e, i), e;
	    };
	  }(),
	      nt = function nt(t, e, n) {
	    return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
	  },
	      it = Object.assign || function (t) {
	    for (var e = 1; e < arguments.length; e++) {
	      var n = arguments[e];for (var i in n) {
	        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
	      }
	    }return t;
	  };function rt(t) {
	    return it({}, t, { right: t.left + t.width, bottom: t.top + t.height });
	  }function ot(t) {
	    var e = {};if (Z()) try {
	      e = t.getBoundingClientRect();var n = q(t, "top"),
	          i = q(t, "left");e.top += n, e.left += i, e.bottom += n, e.right += i;
	    } catch (t) {} else e = t.getBoundingClientRect();var r = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
	        o = "HTML" === t.nodeName ? $() : {},
	        s = o.width || t.clientWidth || r.right - r.left,
	        a = o.height || t.clientHeight || r.bottom - r.top,
	        l = t.offsetWidth - s,
	        c = t.offsetHeight - a;if (l || c) {
	      var h = F(t);l -= z(h, "x"), c -= z(h, "y"), r.width -= l, r.height -= c;
	    }return rt(r);
	  }function st(t, e) {
	    var n = Z(),
	        i = "HTML" === e.nodeName,
	        r = ot(t),
	        o = ot(e),
	        s = V(t),
	        a = F(e),
	        l = parseFloat(a.borderTopWidth, 10),
	        c = parseFloat(a.borderLeftWidth, 10),
	        h = rt({ top: r.top - o.top - l, left: r.left - o.left - c, width: r.width, height: r.height });if (h.marginTop = 0, h.marginLeft = 0, !n && i) {
	      var f = parseFloat(a.marginTop, 10),
	          u = parseFloat(a.marginLeft, 10);h.top -= l - f, h.bottom -= l - f, h.left -= c - u, h.right -= c - u, h.marginTop = f, h.marginLeft = u;
	    }return (n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (h = function (t, e) {
	      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
	          i = q(e, "top"),
	          r = q(e, "left"),
	          o = n ? -1 : 1;return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t;
	    }(h, e)), h;
	  }function at(t, e, n, i) {
	    var r,
	        o,
	        s,
	        a,
	        l,
	        c,
	        h,
	        f = { top: 0, left: 0 },
	        u = G(t, e);if ("viewport" === i) o = (r = u).ownerDocument.documentElement, s = st(r, o), a = Math.max(o.clientWidth, window.innerWidth || 0), l = Math.max(o.clientHeight, window.innerHeight || 0), c = q(o), h = q(o, "left"), f = rt({ top: c - s.top + s.marginTop, left: h - s.left + s.marginLeft, width: a, height: l });else {
	      var d = void 0;"scrollParent" === i ? "BODY" === (d = V(K(e))).nodeName && (d = t.ownerDocument.documentElement) : d = "window" === i ? t.ownerDocument.documentElement : i;var p = st(d, u);if ("HTML" !== d.nodeName || function t(e) {
	        var n = e.nodeName;return "BODY" !== n && "HTML" !== n && ("fixed" === F(e, "position") || t(K(e)));
	      }(u)) f = p;else {
	        var g = $(),
	            m = g.height,
	            _ = g.width;f.top += p.top - p.marginTop, f.bottom = m + p.top, f.left += p.left - p.marginLeft, f.right = _ + p.left;
	      }
	    }return f.left += n, f.top += n, f.right -= n, f.bottom -= n, f;
	  }function lt(t, e, n, i, r) {
	    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === t.indexOf("auto")) return t;var s = at(n, i, o, r),
	        a = { top: { width: s.width, height: e.top - s.top }, right: { width: s.right - e.right, height: s.height }, bottom: { width: s.width, height: s.bottom - e.bottom }, left: { width: e.left - s.left, height: s.height } },
	        l = Object.keys(a).map(function (t) {
	      return it({ key: t }, a[t], { area: (e = a[t], e.width * e.height) });var e;
	    }).sort(function (t, e) {
	      return e.area - t.area;
	    }),
	        c = l.filter(function (t) {
	      var e = t.width,
	          i = t.height;return e >= n.clientWidth && i >= n.clientHeight;
	    }),
	        h = c.length > 0 ? c[0].key : l[0].key,
	        f = t.split("-")[1];return h + (f ? "-" + f : "");
	  }function ct(t, e, n) {
	    return st(n, G(e, n));
	  }function ht(t) {
	    var e = getComputedStyle(t),
	        n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
	        i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);return { width: t.offsetWidth + i, height: t.offsetHeight + n };
	  }function ft(t) {
	    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };return t.replace(/left|right|bottom|top/g, function (t) {
	      return e[t];
	    });
	  }function ut(t, e, n) {
	    n = n.split("-")[0];var i = ht(t),
	        r = { width: i.width, height: i.height },
	        o = -1 !== ["right", "left"].indexOf(n),
	        s = o ? "top" : "left",
	        a = o ? "left" : "top",
	        l = o ? "height" : "width",
	        c = o ? "width" : "height";return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[ft(a)], r;
	  }function dt(t, e) {
	    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
	  }function pt(t, e, n) {
	    return (void 0 === n ? t : t.slice(0, function (t, e, n) {
	      if (Array.prototype.findIndex) return t.findIndex(function (t) {
	        return t[e] === n;
	      });var i = dt(t, function (t) {
	        return t[e] === n;
	      });return t.indexOf(i);
	    }(t, "name", n))).forEach(function (t) {
	      t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n = t.function || t.fn;t.enabled && B(n) && (e.offsets.popper = rt(e.offsets.popper), e.offsets.reference = rt(e.offsets.reference), e = n(e, t));
	    }), e;
	  }function gt(t, e) {
	    return t.some(function (t) {
	      var n = t.name;return t.enabled && n === e;
	    });
	  }function mt(t) {
	    for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length - 1; i++) {
	      var r = e[i],
	          o = r ? "" + r + n : t;if ("undefined" != typeof document.body.style[o]) return o;
	    }return null;
	  }function _t(t) {
	    var e = t.ownerDocument;return e ? e.defaultView : window;
	  }function vt(t, e, n, i) {
	    n.updateBound = i, _t(t).addEventListener("resize", n.updateBound, { passive: !0 });var r = V(t);return function t(e, n, i, r) {
	      var o = "BODY" === e.nodeName,
	          s = o ? e.ownerDocument.defaultView : e;s.addEventListener(n, i, { passive: !0 }), o || t(V(s.parentNode), n, i, r), r.push(s);
	    }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n;
	  }function Et() {
	    var t, e;this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, _t(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
	      t.removeEventListener("scroll", e.updateBound);
	    }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e));
	  }function yt(t) {
	    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
	  }function bt(t, e) {
	    Object.keys(e).forEach(function (n) {
	      var i = "";-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && yt(e[n]) && (i = "px"), t.style[n] = e[n] + i;
	    });
	  }function Tt(t, e, n) {
	    var i = dt(t, function (t) {
	      return t.name === e;
	    }),
	        r = !!i && t.some(function (t) {
	      return t.name === n && t.enabled && t.order < i.order;
	    });if (!r) {
	      var o = "`" + e + "`",
	          s = "`" + n + "`";console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
	    }return r;
	  }var Ct = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
	      wt = Ct.slice(3);function It(t) {
	    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
	        n = wt.indexOf(t),
	        i = wt.slice(n + 1).concat(wt.slice(0, n));return e ? i.reverse() : i;
	  }var At = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };function Dt(t, e, n, i) {
	    var r = [0, 0],
	        o = -1 !== ["right", "left"].indexOf(i),
	        s = t.split(/(\+|\-)/).map(function (t) {
	      return t.trim();
	    }),
	        a = s.indexOf(dt(s, function (t) {
	      return -1 !== t.search(/,|\s/);
	    }));s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l = /\s*,\s*|\s+/,
	        c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];return (c = c.map(function (t, i) {
	      var r = (1 === i ? !o : o) ? "height" : "width",
	          s = !1;return t.reduce(function (t, e) {
	        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e);
	      }, []).map(function (t) {
	        return function (t, e, n, i) {
	          var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
	              o = +r[1],
	              s = r[2];if (!o) return t;if (0 === s.indexOf("%")) {
	            var a = void 0;switch (s) {case "%p":
	                a = n;break;case "%":case "%r":default:
	                a = i;}return rt(a)[e] / 100 * o;
	          }if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;return o;
	        }(t, r, e, n);
	      });
	    })).forEach(function (t, e) {
	      t.forEach(function (n, i) {
	        yt(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1));
	      });
	    }), r;
	  }var St = { placement: "bottom", eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(t) {
	          var e = t.placement,
	              n = e.split("-")[0],
	              i = e.split("-")[1];if (i) {
	            var r = t.offsets,
	                o = r.reference,
	                s = r.popper,
	                a = -1 !== ["bottom", "top"].indexOf(n),
	                l = a ? "left" : "top",
	                c = a ? "width" : "height",
	                h = { start: nt({}, l, o[l]), end: nt({}, l, o[l] + o[c] - s[c]) };t.offsets.popper = it({}, s, h[i]);
	          }return t;
	        } }, offset: { order: 200, enabled: !0, fn: function fn(t, e) {
	          var n = e.offset,
	              i = t.placement,
	              r = t.offsets,
	              o = r.popper,
	              s = r.reference,
	              a = i.split("-")[0],
	              l = void 0;return l = yt(+n) ? [+n, 0] : Dt(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t;
	        }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(t, e) {
	          var n = e.boundariesElement || Q(t.instance.popper);t.instance.reference === n && (n = Q(n));var i = at(t.instance.popper, t.instance.reference, e.padding, n);e.boundaries = i;var r = e.priority,
	              o = t.offsets.popper,
	              s = { primary: function primary(t) {
	              var n = o[t];return o[t] < i[t] && !e.escapeWithReference && (n = Math.max(o[t], i[t])), nt({}, t, n);
	            }, secondary: function secondary(t) {
	              var n = "right" === t ? "left" : "top",
	                  r = o[n];return o[t] > i[t] && !e.escapeWithReference && (r = Math.min(o[n], i[t] - ("right" === t ? o.width : o.height))), nt({}, n, r);
	            } };return r.forEach(function (t) {
	            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";o = it({}, o, s[e](t));
	          }), t.offsets.popper = o, t;
	        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function fn(t) {
	          var e = t.offsets,
	              n = e.popper,
	              i = e.reference,
	              r = t.placement.split("-")[0],
	              o = Math.floor,
	              s = -1 !== ["top", "bottom"].indexOf(r),
	              a = s ? "right" : "bottom",
	              l = s ? "left" : "top",
	              c = s ? "width" : "height";return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t;
	        } }, arrow: { order: 500, enabled: !0, fn: function fn(t, e) {
	          var n;if (!Tt(t.instance.modifiers, "arrow", "keepTogether")) return t;var i = e.element;if ("string" == typeof i) {
	            if (!(i = t.instance.popper.querySelector(i))) return t;
	          } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;var r = t.placement.split("-")[0],
	              o = t.offsets,
	              s = o.popper,
	              a = o.reference,
	              l = -1 !== ["left", "right"].indexOf(r),
	              c = l ? "height" : "width",
	              h = l ? "Top" : "Left",
	              f = h.toLowerCase(),
	              u = l ? "left" : "top",
	              d = l ? "bottom" : "right",
	              p = ht(i)[c];a[d] - p < s[f] && (t.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (t.offsets.popper[f] += a[f] + p - s[d]), t.offsets.popper = rt(t.offsets.popper);var g = a[f] + a[c] / 2 - p / 2,
	              m = F(t.instance.popper),
	              _ = parseFloat(m["margin" + h], 10),
	              v = parseFloat(m["border" + h + "Width"], 10),
	              E = g - t.offsets.popper[f] - _ - v;return E = Math.max(Math.min(s[c] - p, E), 0), t.arrowElement = i, t.offsets.arrow = (nt(n = {}, f, Math.round(E)), nt(n, u, ""), n), t;
	        }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function fn(t, e) {
	          if (gt(t.instance.modifiers, "inner")) return t;if (t.flipped && t.placement === t.originalPlacement) return t;var n = at(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
	              i = t.placement.split("-")[0],
	              r = ft(i),
	              o = t.placement.split("-")[1] || "",
	              s = [];switch (e.behavior) {case At.FLIP:
	              s = [i, r];break;case At.CLOCKWISE:
	              s = It(i);break;case At.COUNTERCLOCKWISE:
	              s = It(i, !0);break;default:
	              s = e.behavior;}return s.forEach(function (a, l) {
	            if (i !== a || s.length === l + 1) return t;i = t.placement.split("-")[0], r = ft(i);var c,
	                h = t.offsets.popper,
	                f = t.offsets.reference,
	                u = Math.floor,
	                d = "left" === i && u(h.right) > u(f.left) || "right" === i && u(h.left) < u(f.right) || "top" === i && u(h.bottom) > u(f.top) || "bottom" === i && u(h.top) < u(f.bottom),
	                p = u(h.left) < u(n.left),
	                g = u(h.right) > u(n.right),
	                m = u(h.top) < u(n.top),
	                _ = u(h.bottom) > u(n.bottom),
	                v = "left" === i && p || "right" === i && g || "top" === i && m || "bottom" === i && _,
	                E = -1 !== ["top", "bottom"].indexOf(i),
	                y = !!e.flipVariations && (E && "start" === o && p || E && "end" === o && g || !E && "start" === o && m || !E && "end" === o && _);(d || v || y) && (t.flipped = !0, (d || v) && (i = s[l + 1]), y && (o = "end" === (c = o) ? "start" : "start" === c ? "end" : c), t.placement = i + (o ? "-" + o : ""), t.offsets.popper = it({}, t.offsets.popper, ut(t.instance.popper, t.offsets.reference, t.placement)), t = pt(t.instance.modifiers, t, "flip"));
	          }), t;
	        }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: function fn(t) {
	          var e = t.placement,
	              n = e.split("-")[0],
	              i = t.offsets,
	              r = i.popper,
	              o = i.reference,
	              s = -1 !== ["left", "right"].indexOf(n),
	              a = -1 === ["top", "left"].indexOf(n);return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = ft(e), t.offsets.popper = rt(r), t;
	        } }, hide: { order: 800, enabled: !0, fn: function fn(t) {
	          if (!Tt(t.instance.modifiers, "hide", "preventOverflow")) return t;var e = t.offsets.reference,
	              n = dt(t.instance.modifiers, function (t) {
	            return "preventOverflow" === t.name;
	          }).boundaries;if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
	            if (!0 === t.hide) return t;t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
	          } else {
	            if (!1 === t.hide) return t;t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
	          }return t;
	        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(t, e) {
	          var n = e.x,
	              i = e.y,
	              r = t.offsets.popper,
	              o = dt(t.instance.modifiers, function (t) {
	            return "applyStyle" === t.name;
	          }).gpuAcceleration;void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s = void 0 !== o ? o : e.gpuAcceleration,
	              a = ot(Q(t.instance.popper)),
	              l = { position: r.position },
	              c = { left: Math.floor(r.left), top: Math.floor(r.top), bottom: Math.floor(r.bottom), right: Math.floor(r.right) },
	              h = "bottom" === n ? "top" : "bottom",
	              f = "right" === i ? "left" : "right",
	              u = mt("transform"),
	              d = void 0,
	              p = void 0;if (p = "bottom" === h ? -a.height + c.bottom : c.top, d = "right" === f ? -a.width + c.right : c.left, s && u) l[u] = "translate3d(" + d + "px, " + p + "px, 0)", l[h] = 0, l[f] = 0, l.willChange = "transform";else {
	            var g = "bottom" === h ? -1 : 1,
	                m = "right" === f ? -1 : 1;l[h] = p * g, l[f] = d * m, l.willChange = h + ", " + f;
	          }var _ = { "x-placement": t.placement };return t.attributes = it({}, _, t.attributes), t.styles = it({}, l, t.styles), t.arrowStyles = it({}, t.offsets.arrow, t.arrowStyles), t;
	        }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function fn(t) {
	          var e, n;return bt(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
	            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
	          }), t.arrowElement && Object.keys(t.arrowStyles).length && bt(t.arrowElement, t.arrowStyles), t;
	        }, onLoad: function onLoad(t, e, n, i, r) {
	          var o = ct(0, e, t),
	              s = lt(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);return e.setAttribute("x-placement", s), bt(e, { position: "absolute" }), n;
	        }, gpuAcceleration: void 0 } } },
	      Ot = function () {
	    function t(e, n) {
	      var i = this,
	          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};tt(this, t), this.scheduleUpdate = function () {
	        return requestAnimationFrame(i.update);
	      }, this.update = U(this.update.bind(this)), this.options = it({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(it({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
	        i.options.modifiers[e] = it({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
	      }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
	        return it({ name: t }, i.options.modifiers[t]);
	      }).sort(function (t, e) {
	        return t.order - e.order;
	      }), this.modifiers.forEach(function (t) {
	        t.enabled && B(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
	      }), this.update();var o = this.options.eventsEnabled;o && this.enableEventListeners(), this.state.eventsEnabled = o;
	    }return et(t, [{ key: "update", value: function value() {
	        return function () {
	          if (!this.state.isDestroyed) {
	            var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };t.offsets.reference = ct(this.state, this.popper, this.reference), t.placement = lt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = ut(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = pt(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
	          }
	        }.call(this);
	      } }, { key: "destroy", value: function value() {
	        return function () {
	          return this.state.isDestroyed = !0, gt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[mt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
	        }.call(this);
	      } }, { key: "enableEventListeners", value: function value() {
	        return function () {
	          this.state.eventsEnabled || (this.state = vt(this.reference, this.options, this.state, this.scheduleUpdate));
	        }.call(this);
	      } }, { key: "disableEventListeners", value: function value() {
	        return Et.call(this);
	      } }]), t;
	  }();Ot.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Ot.placements = Ct, Ot.Defaults = St;var Nt = function (t) {
	    var e = "dropdown",
	        n = "bs.dropdown",
	        o = "." + n,
	        s = t.fn[e],
	        a = new RegExp("38|40|27"),
	        l = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, CLICK: "click" + o, CLICK_DATA_API: "click" + o + ".data-api", KEYDOWN_DATA_API: "keydown" + o + ".data-api", KEYUP_DATA_API: "keyup" + o + ".data-api" },
	        c = "disabled",
	        h = "show",
	        f = "dropup",
	        u = "dropright",
	        d = "dropleft",
	        p = "dropdown-menu-right",
	        g = "dropdown-menu-left",
	        m = "position-static",
	        _ = '[data-toggle="dropdown"]',
	        v = ".dropdown form",
	        E = ".dropdown-menu",
	        y = ".navbar-nav",
	        b = ".dropdown-menu .dropdown-item:not(.disabled)",
	        T = "top-start",
	        C = "top-end",
	        w = "bottom-start",
	        I = "bottom-end",
	        A = "right-start",
	        D = "left-start",
	        S = { offset: 0, flip: !0, boundary: "scrollParent" },
	        O = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)" },
	        N = function () {
	      function s(t, e) {
	        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
	      }var v = s.prototype;return v.toggle = function () {
	        if (!this._element.disabled && !t(this._element).hasClass(c)) {
	          var e = s._getParentFromElement(this._element),
	              n = t(this._menu).hasClass(h);if (s._clearMenus(), !n) {
	            var i = { relatedTarget: this._element },
	                r = t.Event(l.SHOW, i);if (t(e).trigger(r), !r.isDefaultPrevented()) {
	              if (!this._inNavbar) {
	                if ("undefined" == typeof Ot) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o = this._element;t(e).hasClass(f) && (t(this._menu).hasClass(g) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(m), this._popper = new Ot(o, this._menu, this._getPopperConfig());
	              }"ontouchstart" in document.documentElement && 0 === t(e).closest(y).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(h), t(e).toggleClass(h).trigger(t.Event(l.SHOWN, i));
	            }
	          }
	        }
	      }, v.dispose = function () {
	        t.removeData(this._element, n), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
	      }, v.update = function () {
	        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
	      }, v._addEventListeners = function () {
	        var e = this;t(this._element).on(l.CLICK, function (t) {
	          t.preventDefault(), t.stopPropagation(), e.toggle();
	        });
	      }, v._getConfig = function (n) {
	        return n = r({}, this.constructor.Default, t(this._element).data(), n), k.typeCheckConfig(e, n, this.constructor.DefaultType), n;
	      }, v._getMenuElement = function () {
	        if (!this._menu) {
	          var e = s._getParentFromElement(this._element);this._menu = t(e).find(E)[0];
	        }return this._menu;
	      }, v._getPlacement = function () {
	        var e = t(this._element).parent(),
	            n = w;return e.hasClass(f) ? (n = T, t(this._menu).hasClass(p) && (n = C)) : e.hasClass(u) ? n = A : e.hasClass(d) ? n = D : t(this._menu).hasClass(p) && (n = I), n;
	      }, v._detectNavbar = function () {
	        return t(this._element).closest(".navbar").length > 0;
	      }, v._getPopperConfig = function () {
	        var t = this,
	            e = {};return "function" == typeof this._config.offset ? e.fn = function (e) {
	          return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e;
	        } : e.offset = this._config.offset, { placement: this._getPlacement(), modifiers: { offset: e, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
	      }, s._jQueryInterface = function (e) {
	        return this.each(function () {
	          var i = t(this).data(n);if (i || (i = new s(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : null), t(this).data(n, i)), "string" == typeof e) {
	            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');i[e]();
	          }
	        });
	      }, s._clearMenus = function (e) {
	        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var i = t.makeArray(t(_)), r = 0; r < i.length; r++) {
	          var o = s._getParentFromElement(i[r]),
	              a = t(i[r]).data(n),
	              c = { relatedTarget: i[r] };if (a) {
	            var f = a._menu;if (t(o).hasClass(h) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(o, e.target))) {
	              var u = t.Event(l.HIDE, c);t(o).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), i[r].setAttribute("aria-expanded", "false"), t(f).removeClass(h), t(o).removeClass(h).trigger(t.Event(l.HIDDEN, c)));
	            }
	          }
	        }
	      }, s._getParentFromElement = function (e) {
	        var n,
	            i = k.getSelectorFromElement(e);return i && (n = t(i)[0]), n || e.parentNode;
	      }, s._dataApiKeydownHandler = function (e) {
	        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(E).length)) : a.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(c))) {
	          var n = s._getParentFromElement(this),
	              i = t(n).hasClass(h);if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
	            var r = t(n).find(b).get();if (0 !== r.length) {
	              var o = r.indexOf(e.target);38 === e.which && o > 0 && o--, 40 === e.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus();
	            }
	          } else {
	            if (27 === e.which) {
	              var l = t(n).find(_)[0];t(l).trigger("focus");
	            }t(this).trigger("click");
	          }
	        }
	      }, i(s, null, [{ key: "VERSION", get: function get() {
	          return "4.0.0";
	        } }, { key: "Default", get: function get() {
	          return S;
	        } }, { key: "DefaultType", get: function get() {
	          return O;
	        } }]), s;
	    }();return t(document).on(l.KEYDOWN_DATA_API, _, N._dataApiKeydownHandler).on(l.KEYDOWN_DATA_API, E, N._dataApiKeydownHandler).on(l.CLICK_DATA_API + " " + l.KEYUP_DATA_API, N._clearMenus).on(l.CLICK_DATA_API, _, function (e) {
	      e.preventDefault(), e.stopPropagation(), N._jQueryInterface.call(t(this), "toggle");
	    }).on(l.CLICK_DATA_API, v, function (t) {
	      t.stopPropagation();
	    }), t.fn[e] = N._jQueryInterface, t.fn[e].Constructor = N, t.fn[e].noConflict = function () {
	      return t.fn[e] = s, N._jQueryInterface;
	    }, N;
	  }(e),
	      kt = function (t) {
	    var e = "bs.modal",
	        n = "." + e,
	        o = t.fn.modal,
	        s = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
	        a = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
	        l = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, FOCUSIN: "focusin" + n, RESIZE: "resize" + n, CLICK_DISMISS: "click.dismiss" + n, KEYDOWN_DISMISS: "keydown.dismiss" + n, MOUSEUP_DISMISS: "mouseup.dismiss" + n, MOUSEDOWN_DISMISS: "mousedown.dismiss" + n, CLICK_DATA_API: "click.bs.modal.data-api" },
	        c = "modal-scrollbar-measure",
	        h = "modal-backdrop",
	        f = "modal-open",
	        u = "fade",
	        d = "show",
	        p = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" },
	        g = function () {
	      function o(e, n) {
	        this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(p.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
	      }var g = o.prototype;return g.toggle = function (t) {
	        return this._isShown ? this.hide() : this.show(t);
	      }, g.show = function (e) {
	        var n = this;if (!this._isTransitioning && !this._isShown) {
	          k.supportsTransitionEnd() && t(this._element).hasClass(u) && (this._isTransitioning = !0);var i = t.Event(l.SHOW, { relatedTarget: e });t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(l.CLICK_DISMISS, p.DATA_DISMISS, function (t) {
	            return n.hide(t);
	          }), t(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
	            t(n._element).one(l.MOUSEUP_DISMISS, function (e) {
	              t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
	            });
	          }), this._showBackdrop(function () {
	            return n._showElement(e);
	          }));
	        }
	      }, g.hide = function (e) {
	        var n = this;if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
	          var i = t.Event(l.HIDE);if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
	            this._isShown = !1;var r = k.supportsTransitionEnd() && t(this._element).hasClass(u);r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(l.FOCUSIN), t(this._element).removeClass(d), t(this._element).off(l.CLICK_DISMISS), t(this._dialog).off(l.MOUSEDOWN_DISMISS), r ? t(this._element).one(k.TRANSITION_END, function (t) {
	              return n._hideModal(t);
	            }).emulateTransitionEnd(300) : this._hideModal();
	          }
	        }
	      }, g.dispose = function () {
	        t.removeData(this._element, e), t(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
	      }, g.handleUpdate = function () {
	        this._adjustDialog();
	      }, g._getConfig = function (t) {
	        return t = r({}, s, t), k.typeCheckConfig("modal", t, a), t;
	      }, g._showElement = function (e) {
	        var n = this,
	            i = k.supportsTransitionEnd() && t(this._element).hasClass(u);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && k.reflow(this._element), t(this._element).addClass(d), this._config.focus && this._enforceFocus();var r = t.Event(l.SHOWN, { relatedTarget: e }),
	            o = function o() {
	          n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r);
	        };i ? t(this._dialog).one(k.TRANSITION_END, o).emulateTransitionEnd(300) : o();
	      }, g._enforceFocus = function () {
	        var e = this;t(document).off(l.FOCUSIN).on(l.FOCUSIN, function (n) {
	          document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus();
	        });
	      }, g._setEscapeEvent = function () {
	        var e = this;this._isShown && this._config.keyboard ? t(this._element).on(l.KEYDOWN_DISMISS, function (t) {
	          27 === t.which && (t.preventDefault(), e.hide());
	        }) : this._isShown || t(this._element).off(l.KEYDOWN_DISMISS);
	      }, g._setResizeEvent = function () {
	        var e = this;this._isShown ? t(window).on(l.RESIZE, function (t) {
	          return e.handleUpdate(t);
	        }) : t(window).off(l.RESIZE);
	      }, g._hideModal = function () {
	        var e = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
	          t(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(l.HIDDEN);
	        });
	      }, g._removeBackdrop = function () {
	        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
	      }, g._showBackdrop = function (e) {
	        var n = this,
	            i = t(this._element).hasClass(u) ? u : "";if (this._isShown && this._config.backdrop) {
	          var r = k.supportsTransitionEnd() && i;if (this._backdrop = document.createElement("div"), this._backdrop.className = h, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(l.CLICK_DISMISS, function (t) {
	            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
	          }), r && k.reflow(this._backdrop), t(this._backdrop).addClass(d), !e) return;if (!r) return void e();t(this._backdrop).one(k.TRANSITION_END, e).emulateTransitionEnd(150);
	        } else if (!this._isShown && this._backdrop) {
	          t(this._backdrop).removeClass(d);var o = function o() {
	            n._removeBackdrop(), e && e();
	          };k.supportsTransitionEnd() && t(this._element).hasClass(u) ? t(this._backdrop).one(k.TRANSITION_END, o).emulateTransitionEnd(150) : o();
	        } else e && e();
	      }, g._adjustDialog = function () {
	        var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
	      }, g._resetAdjustments = function () {
	        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
	      }, g._checkScrollbar = function () {
	        var t = document.body.getBoundingClientRect();this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
	      }, g._setScrollbar = function () {
	        var e = this;if (this._isBodyOverflowing) {
	          t(p.FIXED_CONTENT).each(function (n, i) {
	            var r = t(i)[0].style.paddingRight,
	                o = t(i).css("padding-right");t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px");
	          }), t(p.STICKY_CONTENT).each(function (n, i) {
	            var r = t(i)[0].style.marginRight,
	                o = t(i).css("margin-right");t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px");
	          }), t(p.NAVBAR_TOGGLER).each(function (n, i) {
	            var r = t(i)[0].style.marginRight,
	                o = t(i).css("margin-right");t(i).data("margin-right", r).css("margin-right", parseFloat(o) + e._scrollbarWidth + "px");
	          });var n = document.body.style.paddingRight,
	              i = t("body").css("padding-right");t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
	        }
	      }, g._resetScrollbar = function () {
	        t(p.FIXED_CONTENT).each(function (e, n) {
	          var i = t(n).data("padding-right");"undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right");
	        }), t(p.STICKY_CONTENT + ", " + p.NAVBAR_TOGGLER).each(function (e, n) {
	          var i = t(n).data("margin-right");"undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right");
	        });var e = t("body").data("padding-right");"undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right");
	      }, g._getScrollbarWidth = function () {
	        var t = document.createElement("div");t.className = c, document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
	      }, o._jQueryInterface = function (n, i) {
	        return this.each(function () {
	          var s = t(this).data(e),
	              a = r({}, o.Default, t(this).data(), "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n);if (s || (s = new o(this, a), t(this).data(e, s)), "string" == typeof n) {
	            if ("undefined" == typeof s[n]) throw new TypeError('No method named "' + n + '"');s[n](i);
	          } else a.show && s.show(i);
	        });
	      }, i(o, null, [{ key: "VERSION", get: function get() {
	          return "4.0.0";
	        } }, { key: "Default", get: function get() {
	          return s;
	        } }]), o;
	    }();return t(document).on(l.CLICK_DATA_API, p.DATA_TOGGLE, function (n) {
	      var i,
	          o = this,
	          s = k.getSelectorFromElement(this);s && (i = t(s)[0]);var a = t(i).data(e) ? "toggle" : r({}, t(i).data(), t(this).data());"A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();var c = t(i).one(l.SHOW, function (e) {
	        e.isDefaultPrevented() || c.one(l.HIDDEN, function () {
	          t(o).is(":visible") && o.focus();
	        });
	      });g._jQueryInterface.call(t(i), a, this);
	    }), t.fn.modal = g._jQueryInterface, t.fn.modal.Constructor = g, t.fn.modal.noConflict = function () {
	      return t.fn.modal = o, g._jQueryInterface;
	    }, g;
	  }(e),
	      Lt = function (t) {
	    var e = "tooltip",
	        n = "bs.tooltip",
	        o = "." + n,
	        s = t.fn[e],
	        a = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
	        l = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" },
	        c = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
	        h = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" },
	        f = "show",
	        u = "out",
	        d = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, INSERTED: "inserted" + o, CLICK: "click" + o, FOCUSIN: "focusin" + o, FOCUSOUT: "focusout" + o, MOUSEENTER: "mouseenter" + o, MOUSELEAVE: "mouseleave" + o },
	        p = "fade",
	        g = "show",
	        m = ".tooltip-inner",
	        _ = ".arrow",
	        v = "hover",
	        E = "focus",
	        y = "click",
	        b = "manual",
	        T = function () {
	      function s(t, e) {
	        if ("undefined" == typeof Ot) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
	      }var T = s.prototype;return T.enable = function () {
	        this._isEnabled = !0;
	      }, T.disable = function () {
	        this._isEnabled = !1;
	      }, T.toggleEnabled = function () {
	        this._isEnabled = !this._isEnabled;
	      }, T.toggle = function (e) {
	        if (this._isEnabled) if (e) {
	          var n = this.constructor.DATA_KEY,
	              i = t(e.currentTarget).data(n);i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
	        } else {
	          if (t(this.getTipElement()).hasClass(g)) return void this._leave(null, this);this._enter(null, this);
	        }
	      }, T.dispose = function () {
	        clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
	      }, T.show = function () {
	        var e = this;if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");var n = t.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
	          t(this.element).trigger(n);var i = t.contains(this.element.ownerDocument.documentElement, this.element);if (n.isDefaultPrevented() || !i) return;var r = this.getTipElement(),
	              o = k.getUID(this.constructor.NAME);r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(p);var a = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
	              l = this._getAttachment(a);this.addAttachmentClass(l);var c = !1 === this.config.container ? document.body : t(this.config.container);t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Ot(this.element, r, { placement: l, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: _ }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(t) {
	              t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
	            }, onUpdate: function onUpdate(t) {
	              e._handlePopperPlacementChange(t);
	            } }), t(r).addClass(g), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);var h = function h() {
	            e.config.animation && e._fixTransition();var n = e._hoverState;e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === u && e._leave(null, e);
	          };k.supportsTransitionEnd() && t(this.tip).hasClass(p) ? t(this.tip).one(k.TRANSITION_END, h).emulateTransitionEnd(s._TRANSITION_DURATION) : h();
	        }
	      }, T.hide = function (e) {
	        var n = this,
	            i = this.getTipElement(),
	            r = t.Event(this.constructor.Event.HIDE),
	            o = function o() {
	          n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
	        };t(this.element).trigger(r), r.isDefaultPrevented() || (t(i).removeClass(g), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y] = !1, this._activeTrigger[E] = !1, this._activeTrigger[v] = !1, k.supportsTransitionEnd() && t(this.tip).hasClass(p) ? t(i).one(k.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "");
	      }, T.update = function () {
	        null !== this._popper && this._popper.scheduleUpdate();
	      }, T.isWithContent = function () {
	        return Boolean(this.getTitle());
	      }, T.addAttachmentClass = function (e) {
	        t(this.getTipElement()).addClass("bs-tooltip-" + e);
	      }, T.getTipElement = function () {
	        return this.tip = this.tip || t(this.config.template)[0], this.tip;
	      }, T.setContent = function () {
	        var e = t(this.getTipElement());this.setElementContent(e.find(m), this.getTitle()), e.removeClass(p + " " + g);
	      }, T.setElementContent = function (e, n) {
	        var i = this.config.html;"object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n);
	      }, T.getTitle = function () {
	        var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
	      }, T._getAttachment = function (t) {
	        return c[t.toUpperCase()];
	      }, T._setListeners = function () {
	        var e = this;this.config.trigger.split(" ").forEach(function (n) {
	          if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
	            return e.toggle(t);
	          });else if (n !== b) {
	            var i = n === v ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
	                r = n === v ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;t(e.element).on(i, e.config.selector, function (t) {
	              return e._enter(t);
	            }).on(r, e.config.selector, function (t) {
	              return e._leave(t);
	            });
	          }t(e.element).closest(".modal").on("hide.bs.modal", function () {
	            return e.hide();
	          });
	        }), this.config.selector ? this.config = r({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
	      }, T._fixTitle = function () {
	        var t = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
	      }, T._enter = function (e, n) {
	        var i = this.constructor.DATA_KEY;(n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? E : v] = !0), t(n.getTipElement()).hasClass(g) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
	          n._hoverState === f && n.show();
	        }, n.config.delay.show) : n.show());
	      }, T._leave = function (e, n) {
	        var i = this.constructor.DATA_KEY;(n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? E : v] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = u, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
	          n._hoverState === u && n.hide();
	        }, n.config.delay.hide) : n.hide());
	      }, T._isWithActiveTrigger = function () {
	        for (var t in this._activeTrigger) {
	          if (this._activeTrigger[t]) return !0;
	        }return !1;
	      }, T._getConfig = function (n) {
	        return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), k.typeCheckConfig(e, n, this.constructor.DefaultType), n;
	      }, T._getDelegateConfig = function () {
	        var t = {};if (this.config) for (var e in this.config) {
	          this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
	        }return t;
	      }, T._cleanTipClass = function () {
	        var e = t(this.getTipElement()),
	            n = e.attr("class").match(a);null !== n && n.length > 0 && e.removeClass(n.join(""));
	      }, T._handlePopperPlacementChange = function (t) {
	        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
	      }, T._fixTransition = function () {
	        var e = this.getTipElement(),
	            n = this.config.animation;null === e.getAttribute("x-placement") && (t(e).removeClass(p), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
	      }, s._jQueryInterface = function (e) {
	        return this.each(function () {
	          var i = t(this).data(n),
	              r = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e;if ((i || !/dispose|hide/.test(e)) && (i || (i = new s(this, r), t(this).data(n, i)), "string" == typeof e)) {
	            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');i[e]();
	          }
	        });
	      }, i(s, null, [{ key: "VERSION", get: function get() {
	          return "4.0.0";
	        } }, { key: "Default", get: function get() {
	          return h;
	        } }, { key: "NAME", get: function get() {
	          return e;
	        } }, { key: "DATA_KEY", get: function get() {
	          return n;
	        } }, { key: "Event", get: function get() {
	          return d;
	        } }, { key: "EVENT_KEY", get: function get() {
	          return o;
	        } }, { key: "DefaultType", get: function get() {
	          return l;
	        } }]), s;
	    }();return t.fn[e] = T._jQueryInterface, t.fn[e].Constructor = T, t.fn[e].noConflict = function () {
	      return t.fn[e] = s, T._jQueryInterface;
	    }, T;
	  }(e),
	      Pt = function (t) {
	    var e = "popover",
	        n = "bs.popover",
	        o = "." + n,
	        s = t.fn[e],
	        a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
	        l = r({}, Lt.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
	        c = r({}, Lt.DefaultType, { content: "(string|element|function)" }),
	        h = "fade",
	        f = "show",
	        u = ".popover-header",
	        d = ".popover-body",
	        p = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, INSERTED: "inserted" + o, CLICK: "click" + o, FOCUSIN: "focusin" + o, FOCUSOUT: "focusout" + o, MOUSEENTER: "mouseenter" + o, MOUSELEAVE: "mouseleave" + o },
	        g = function (r) {
	      var s, g;function m() {
	        return r.apply(this, arguments) || this;
	      }g = r, (s = m).prototype = Object.create(g.prototype), s.prototype.constructor = s, s.__proto__ = g;var _ = m.prototype;return _.isWithContent = function () {
	        return this.getTitle() || this._getContent();
	      }, _.addAttachmentClass = function (e) {
	        t(this.getTipElement()).addClass("bs-popover-" + e);
	      }, _.getTipElement = function () {
	        return this.tip = this.tip || t(this.config.template)[0], this.tip;
	      }, _.setContent = function () {
	        var e = t(this.getTipElement());this.setElementContent(e.find(u), this.getTitle());var n = this._getContent();"function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(h + " " + f);
	      }, _._getContent = function () {
	        return this.element.getAttribute("data-content") || this.config.content;
	      }, _._cleanTipClass = function () {
	        var e = t(this.getTipElement()),
	            n = e.attr("class").match(a);null !== n && n.length > 0 && e.removeClass(n.join(""));
	      }, m._jQueryInterface = function (e) {
	        return this.each(function () {
	          var i = t(this).data(n),
	              r = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : null;if ((i || !/destroy|hide/.test(e)) && (i || (i = new m(this, r), t(this).data(n, i)), "string" == typeof e)) {
	            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');i[e]();
	          }
	        });
	      }, i(m, null, [{ key: "VERSION", get: function get() {
	          return "4.0.0";
	        } }, { key: "Default", get: function get() {
	          return l;
	        } }, { key: "NAME", get: function get() {
	          return e;
	        } }, { key: "DATA_KEY", get: function get() {
	          return n;
	        } }, { key: "Event", get: function get() {
	          return p;
	        } }, { key: "EVENT_KEY", get: function get() {
	          return o;
	        } }, { key: "DefaultType", get: function get() {
	          return c;
	        } }]), m;
	    }(Lt);return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
	      return t.fn[e] = s, g._jQueryInterface;
	    }, g;
	  }(e),
	      xt = function (t) {
	    var e = "scrollspy",
	        n = "bs.scrollspy",
	        o = "." + n,
	        s = t.fn[e],
	        a = { offset: 10, method: "auto", target: "" },
	        l = { offset: "number", method: "string", target: "(string|element)" },
	        c = { ACTIVATE: "activate" + o, SCROLL: "scroll" + o, LOAD_DATA_API: "load" + o + ".data-api" },
	        h = "dropdown-item",
	        f = "active",
	        u = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
	        d = "offset",
	        p = "position",
	        g = function () {
	      function s(e, n) {
	        var i = this;this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + u.NAV_LINKS + "," + this._config.target + " " + u.LIST_ITEMS + "," + this._config.target + " " + u.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(c.SCROLL, function (t) {
	          return i._process(t);
	        }), this.refresh(), this._process();
	      }var g = s.prototype;return g.refresh = function () {
	        var e = this,
	            n = this._scrollElement === this._scrollElement.window ? d : p,
	            i = "auto" === this._config.method ? n : this._config.method,
	            r = i === p ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
	          var n,
	              o = k.getSelectorFromElement(e);if (o && (n = t(o)[0]), n) {
	            var s = n.getBoundingClientRect();if (s.width || s.height) return [t(n)[i]().top + r, o];
	          }return null;
	        }).filter(function (t) {
	          return t;
	        }).sort(function (t, e) {
	          return t[0] - e[0];
	        }).forEach(function (t) {
	          e._offsets.push(t[0]), e._targets.push(t[1]);
	        });
	      }, g.dispose = function () {
	        t.removeData(this._element, n), t(this._scrollElement).off(o), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
	      }, g._getConfig = function (n) {
	        if ("string" != typeof (n = r({}, a, n)).target) {
	          var i = t(n.target).attr("id");i || (i = k.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i;
	        }return k.typeCheckConfig(e, n, l), n;
	      }, g._getScrollTop = function () {
	        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
	      }, g._getScrollHeight = function () {
	        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
	      }, g._getOffsetHeight = function () {
	        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
	      }, g._process = function () {
	        var t = this._getScrollTop() + this._config.offset,
	            e = this._getScrollHeight(),
	            n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), t >= n) {
	          var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
	        } else {
	          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var r = this._offsets.length; r--;) {
	            this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
	          }
	        }
	      }, g._activate = function (e) {
	        this._activeTarget = e, this._clear();var n = this._selector.split(",");n = n.map(function (t) {
	          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
	        });var i = t(n.join(","));i.hasClass(h) ? (i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(f), i.addClass(f)) : (i.addClass(f), i.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS + ", " + u.LIST_ITEMS).addClass(f), i.parents(u.NAV_LIST_GROUP).prev(u.NAV_ITEMS).children(u.NAV_LINKS).addClass(f)), t(this._scrollElement).trigger(c.ACTIVATE, { relatedTarget: e });
	      }, g._clear = function () {
	        t(this._selector).filter(u.ACTIVE).removeClass(f);
	      }, s._jQueryInterface = function (e) {
	        return this.each(function () {
	          var i = t(this).data(n);if (i || (i = new s(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e), t(this).data(n, i)), "string" == typeof e) {
	            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');i[e]();
	          }
	        });
	      }, i(s, null, [{ key: "VERSION", get: function get() {
	          return "4.0.0";
	        } }, { key: "Default", get: function get() {
	          return a;
	        } }]), s;
	    }();return t(window).on(c.LOAD_DATA_API, function () {
	      for (var e = t.makeArray(t(u.DATA_SPY)), n = e.length; n--;) {
	        var i = t(e[n]);g._jQueryInterface.call(i, i.data());
	      }
	    }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
	      return t.fn[e] = s, g._jQueryInterface;
	    }, g;
	  }(e),
	      Rt = function (t) {
	    var e = ".bs.tab",
	        n = t.fn.tab,
	        r = { HIDE: "hide" + e, HIDDEN: "hidden" + e, SHOW: "show" + e, SHOWN: "shown" + e, CLICK_DATA_API: "click.bs.tab.data-api" },
	        o = "dropdown-menu",
	        s = "active",
	        a = "disabled",
	        l = "fade",
	        c = "show",
	        h = ".dropdown",
	        f = ".nav, .list-group",
	        u = ".active",
	        d = "> li > .active",
	        p = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
	        g = ".dropdown-toggle",
	        m = "> .dropdown-menu .active",
	        _ = function () {
	      function e(t) {
	        this._element = t;
	      }var n = e.prototype;return n.show = function () {
	        var e = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(s) || t(this._element).hasClass(a))) {
	          var n,
	              i,
	              o = t(this._element).closest(f)[0],
	              l = k.getSelectorFromElement(this._element);if (o) {
	            var c = "UL" === o.nodeName ? d : u;i = (i = t.makeArray(t(o).find(c)))[i.length - 1];
	          }var h = t.Event(r.HIDE, { relatedTarget: this._element }),
	              p = t.Event(r.SHOW, { relatedTarget: i });if (i && t(i).trigger(h), t(this._element).trigger(p), !p.isDefaultPrevented() && !h.isDefaultPrevented()) {
	            l && (n = t(l)[0]), this._activate(this._element, o);var g = function g() {
	              var n = t.Event(r.HIDDEN, { relatedTarget: e._element }),
	                  o = t.Event(r.SHOWN, { relatedTarget: i });t(i).trigger(n), t(e._element).trigger(o);
	            };n ? this._activate(n, n.parentNode, g) : g();
	          }
	        }
	      }, n.dispose = function () {
	        t.removeData(this._element, "bs.tab"), this._element = null;
	      }, n._activate = function (e, n, i) {
	        var r = this,
	            o = ("UL" === n.nodeName ? t(n).find(d) : t(n).children(u))[0],
	            s = i && k.supportsTransitionEnd() && o && t(o).hasClass(l),
	            a = function a() {
	          return r._transitionComplete(e, o, i);
	        };o && s ? t(o).one(k.TRANSITION_END, a).emulateTransitionEnd(150) : a();
	      }, n._transitionComplete = function (e, n, i) {
	        if (n) {
	          t(n).removeClass(c + " " + s);var r = t(n.parentNode).find(m)[0];r && t(r).removeClass(s), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
	        }if (t(e).addClass(s), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), k.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o)) {
	          var a = t(e).closest(h)[0];a && t(a).find(g).addClass(s), e.setAttribute("aria-expanded", !0);
	        }i && i();
	      }, e._jQueryInterface = function (n) {
	        return this.each(function () {
	          var i = t(this),
	              r = i.data("bs.tab");if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof n) {
	            if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');r[n]();
	          }
	        });
	      }, i(e, null, [{ key: "VERSION", get: function get() {
	          return "4.0.0";
	        } }]), e;
	    }();return t(document).on(r.CLICK_DATA_API, p, function (e) {
	      e.preventDefault(), _._jQueryInterface.call(t(this), "show");
	    }), t.fn.tab = _._jQueryInterface, t.fn.tab.Constructor = _, t.fn.tab.noConflict = function () {
	      return t.fn.tab = n, _._jQueryInterface;
	    }, _;
	  }(e);!function (t) {
	    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e = t.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
	  }(e), t.Util = k, t.Alert = L, t.Button = P, t.Carousel = x, t.Collapse = R, t.Dropdown = Nt, t.Modal = kt, t.Popover = Pt, t.Scrollspy = xt, t.Tab = Rt, t.Tooltip = Lt, Object.defineProperty(t, "__esModule", { value: !0 });
	});
	//# sourceMappingURL=bootstrap.bundle.min.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.3.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2018-01-20T17:24Z
	 */
	( function( global, factory ) {
	
		"use strict";
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";
	
	var arr = [];
	
	var document = window.document;
	
	var getProto = Object.getPrototypeOf;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var fnToString = hasOwn.toString;
	
	var ObjectFunctionString = fnToString.call( Object );
	
	var support = {};
	
	var isFunction = function isFunction( obj ) {
	
	      // Support: Chrome <=57, Firefox <=52
	      // In some browsers, typeof returns "function" for HTML <object> elements
	      // (i.e., `typeof document.createElement( "object" ) === "function"`).
	      // We don't want to classify *any* DOM node as a function.
	      return typeof obj === "function" && typeof obj.nodeType !== "number";
	  };
	
	
	var isWindow = function isWindow( obj ) {
			return obj != null && obj === obj.window;
		};
	
	
	
	
		var preservedScriptAttributes = {
			type: true,
			src: true,
			noModule: true
		};
	
		function DOMEval( code, doc, node ) {
			doc = doc || document;
	
			var i,
				script = doc.createElement( "script" );
	
			script.text = code;
			if ( node ) {
				for ( i in preservedScriptAttributes ) {
					if ( node[ i ] ) {
						script[ i ] = node[ i ];
					}
				}
			}
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	
	
	function toType( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
	
		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	
	
	
	var
		version = "3.3.1",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
	
			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}
	
			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = Array.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && Array.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isPlainObject: function( obj ) {
			var proto, Ctor;
	
			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}
	
			proto = getProto( obj );
	
			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}
	
			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},
	
		isEmptyObject: function( obj ) {
	
			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;
	
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = toType( obj );
	
		if ( isFunction( obj ) || isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
	
		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {
	
				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {
	
					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}
	
					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||
	
						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}
	
				return elem.disabled === disabled;
	
			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}
	
			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
	
			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );
	
					if ( elem ) {
	
						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
	
						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}
	
					return [];
				}
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	
	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	
	
	function nodeName( elem, name ) {
	
	  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	
	};
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
	
	
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}
	
		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}
	
		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}
	
		// Filtered directly for both simple and complex selectors
		return jQuery.filter( qualifier, elements, not );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}
	
		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			ret = this.pushStack( [] );
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						if ( elem ) {
	
							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );
	
			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
							matched.push( cur );
							break;
						}
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
	        if ( nodeName( elem, "iframe" ) ) {
	            return elem.contentDocument;
	        }
	
	        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
	        // Treat the template element as a regular one in browsers that
	        // don't support it.
	        if ( nodeName( elem, "template" ) ) {
	            elem = elem.content || elem;
	        }
	
	        return jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = locked || options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && toType( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	function adoptValue( value, resolve, reject, noValue ) {
		var method;
	
		try {
	
			// Check for promise aspect first to privilege synchronous behavior
			if ( value && isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );
	
			// Other thenables
			} else if ( value && isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );
	
			// Other non-thenables
			} else {
	
				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply( undefined, [ value ].slice( noValue ) );
			}
	
		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {
	
			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply( undefined, [ value ] );
		}
	}
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
	
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( isFunction( then ) ) {
	
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}
	
										// Handle all other returned values
										} else {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
	
													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that, args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred( function( newDefer ) {
	
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// rejected_handlers.disable
						// fulfilled_handlers.disable
						tuples[ 3 - i ][ 3 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock,
	
						// progress_handlers.lock
						tuples[ 0 ][ 3 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( singleValue ) {
			var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
				// count of unprocessed arguments
				i = remaining,
	
				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),
	
				// the master Deferred
				master = jQuery.Deferred(),
	
				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};
	
			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
					!remaining );
	
				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
	
					return master.then();
				}
			}
	
			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}
	
			return master.promise();
		}
	} );
	
	
	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
	jQuery.Deferred.exceptionHook = function( error, stack ) {
	
		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};
	
	
	
	
	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};
	
	
	
	
	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();
	
	jQuery.fn.ready = function( fn ) {
	
		readyList
			.then( fn )
	
			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );
	
	jQuery.ready.then = readyList.then;
	
	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );
	
	} else {
	
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );
	
		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( toType( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		if ( chainable ) {
			return elems;
		}
	
		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}
	
		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	
	
	// Matches dashed string for camelizing
	var rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g;
	
	// Used by camelCase as callback to replace()
	function fcamelCase( all, letter ) {
		return letter.toUpperCase();
	}
	
	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 15
	// Microsoft forgot to hump their vendor prefix (#9572)
	function camelCase( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	}
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		cache: function( owner ) {
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
	
				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( Array.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( camelCase );
				} else {
					key = camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}
	
		if ( data === "false" ) {
			return false;
		}
	
		if ( data === "null" ) {
			return null;
		}
	
		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}
	
		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}
	
		return data;
	}
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each( function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || Array.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHiddenWithinTree = function( elem, el ) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&
	
				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&
	
				jQuery.css( elem, "display" ) === "none";
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted, scale,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Support: Firefox <=54
			// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
			initial = initial / 2;
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			while ( maxIterations-- ) {
	
				// Evaluate and update our best guess (doubling guesses that zero out).
				// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
				jQuery.style( elem, prop, initialInUnit + unit );
				if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
					maxIterations = 0;
				}
				initialInUnit = initialInUnit / scale;
	
			}
	
			initialInUnit = initialInUnit * 2;
			jQuery.style( elem, prop, initialInUnit + unit );
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	var defaultDisplayMap = {};
	
	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];
	
		if ( display ) {
			return display;
		}
	
		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );
	
		temp.parentNode.removeChild( temp );
	
		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;
	
		return display;
	}
	
	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;
	
		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			display = elem.style.display;
			if ( show ) {
	
				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";
	
					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}
	
		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
	
	var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;
	
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );
	
		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );
	
		} else {
			ret = [];
		}
	
		if ( tag === undefined || tag && nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}
	
		return ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( toType( elem ) === "object" ) {
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;
	
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( nativeEvent ) {
	
			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );
	
			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
	
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}
	
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			if ( delegateCount &&
	
				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&
	
				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
	
				get: isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},
	
				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},
	
		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;
	
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || Date.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
	
		which: function( event ) {
			var button = event.button;
	
			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
	
			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}
	
				if ( button & 2 ) {
					return 3;
				}
	
				if ( button & 4 ) {
					return 2;
				}
	
				return 0;
			}
	
			return event.which;
		}
	}, jQuery.event.addProp );
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
	
		/* eslint-disable max-len */
	
		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
		/* eslint-enable */
	
		// Support: IE <=10 - 11, Edge 12 - 13 only
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget( elem, content ) {
		if ( nodeName( elem, "table" ) &&
			nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
			elem.type = elem.type.slice( 5 );
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			valueIsFunction = isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( valueIsFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( valueIsFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );
	
	
	
	( function() {
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
	
			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}
	
			container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
				"margin-top:1px;padding:0;border:0";
			div.style.cssText =
				"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
				"margin:auto;border:1px;padding:1px;" +
				"width:60%;top:1%";
			documentElement.appendChild( container ).appendChild( div );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
	
			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;
	
			// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
			// Some styles come back with percentage values, even though they shouldn't
			div.style.right = "60%";
			pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;
	
			// Support: IE 9 - 11 only
			// Detect misreporting of content dimensions for box-sizing:border-box elements
			boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;
	
			// Support: IE 9 only
			// Detect overflow:scroll screwiness (gh-3699)
			div.style.position = "absolute";
			scrollboxSizeVal = div.offsetWidth === 36 || "absolute";
	
			documentElement.removeChild( container );
	
			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}
	
		function roundPixelMeasures( measure ) {
			return Math.round( parseFloat( measure ) );
		}
	
		var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
			reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		jQuery.extend( support, {
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelBoxStyles: function() {
				computeStyleTests();
				return pixelBoxStylesVal;
			},
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			},
			scrollboxSize: function() {
				computeStyleTests();
				return scrollboxSizeVal;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
	
			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rcustomProp = /^--/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	// Return a property mapped along what jQuery.cssProps suggests or to
	// a vendor prefixed property.
	function finalPropName( name ) {
		var ret = jQuery.cssProps[ name ];
		if ( !ret ) {
			ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
		}
		return ret;
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
		var i = dimension === "width" ? 1 : 0,
			extra = 0,
			delta = 0;
	
		// Adjustment may not be necessary
		if ( box === ( isBorderBox ? "border" : "content" ) ) {
			return 0;
		}
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin
			if ( box === "margin" ) {
				delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
			}
	
			// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
			if ( !isBorderBox ) {
	
				// Add padding
				delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// For "border" or "margin", add border
				if ( box !== "padding" ) {
					delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
	
				// But still keep track of it otherwise
				} else {
					extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
	
			// If we get here with a border-box (content + padding + border), we're seeking "content" or
			// "padding" or "margin"
			} else {
	
				// For "content", subtract padding
				if ( box === "content" ) {
					delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// For "content" or "padding", subtract border
				if ( box !== "margin" ) {
					delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		// Account for positive content-box scroll gutter when requested by providing computedVal
		if ( !isBorderBox && computedVal >= 0 ) {
	
			// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
			// Assuming integer scroll gutter, subtract the rest and round down
			delta += Math.max( 0, Math.ceil(
				elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
				computedVal -
				delta -
				extra -
				0.5
			) );
		}
	
		return delta;
	}
	
	function getWidthOrHeight( elem, dimension, extra ) {
	
		// Start with computed style
		var styles = getStyles( elem ),
			val = curCSS( elem, dimension, styles ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
			valueIsBorderBox = isBorderBox;
	
		// Support: Firefox <=54
		// Return a confounding non-pixel value or feign ignorance, as appropriate.
		if ( rnumnonpx.test( val ) ) {
			if ( !extra ) {
				return val;
			}
			val = "auto";
		}
	
		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = valueIsBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ dimension ] );
	
		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		if ( val === "auto" ||
			!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {
	
			val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];
	
			// offsetWidth/offsetHeight provide border-box values
			valueIsBorderBox = true;
		}
	
		// Normalize "" and auto
		val = parseFloat( val ) || 0;
	
		// Adjust for the element's box model
		return ( val +
			boxModelAdjustment(
				elem,
				dimension,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles,
	
				// Provide the current computed size to request scroll gutter calculation (gh-3589)
				val
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name ),
				style = elem.style;
	
			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					if ( isCustomProp ) {
						style.setProperty( name, value );
					} else {
						style[ name ] = value;
					}
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name );
	
			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
	
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, dimension ) {
		jQuery.cssHooks[ dimension ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, dimension, extra );
							} ) :
							getWidthOrHeight( elem, dimension, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = getStyles( elem ),
					isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					subtract = extra && boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					);
	
				// Account for unreliable border-box dimensions by comparing offset* to computed and
				// faking a content-box to get border and padding (gh-3699)
				if ( isBorderBox && support.scrollboxSize() === styles.position ) {
					subtract -= Math.ceil(
						elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
						parseFloat( styles[ dimension ] ) -
						boxModelAdjustment( elem, dimension, "border", false, styles ) -
						0.5
					);
				}
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ dimension ] = value;
					value = jQuery.css( elem, dimension );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( prefix !== "margin" ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( Array.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, inProgress,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	function schedule() {
		if ( inProgress ) {
			if ( document.hidden === false && window.requestAnimationFrame ) {
				window.requestAnimationFrame( schedule );
			} else {
				window.setTimeout( schedule, jQuery.fx.interval );
			}
	
			jQuery.fx.tick();
		}
	}
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = Date.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
	
					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}
	
		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}
	
		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {
	
			// Support: IE <=9 - 11, Edge 12 - 15
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY and Edge just mirrors
			// the overflowX value there.
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {
	
					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}
	
			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {
	
					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {
	
			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}
	
				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
	
				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}
	
				/* eslint-disable no-loop-func */
	
				anim.done( function() {
	
				/* eslint-enable no-loop-func */
	
					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}
	
			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( Array.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				// If there's more to do, yield
				if ( percent < 1 && length ) {
					return remaining;
				}
	
				// If this was an empty animation, synthesize a final progress notification
				if ( !length ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
				}
	
				// Resolve the animation and report its conclusion
				deferred.resolveWith( elem, [ animation ] );
				return false;
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						result.stop.bind( result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		// Attach callbacks from options
		animation
			.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		return animation;
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !isFunction( easing ) && easing
		};
	
		// Go to the end state if fx are off
		if ( jQuery.fx.off ) {
			opt.duration = 0;
	
		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];
	
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = Date.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Run the timer and safely remove it when done (allowing for external removal)
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		jQuery.fx.start();
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( inProgress ) {
			return;
		}
	
		inProgress = true;
		schedule();
	};
	
	jQuery.fx.stop = function() {
		inProgress = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name,
				i = 0,
	
				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();
	
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}
	
					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}
	
					return -1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
		// Strip and collapse whitespace according to HTML spec
		// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}
	
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	function classesToArray( value ) {
		if ( Array.isArray( value ) ) {
			return value;
		}
		if ( typeof value === "string" ) {
			return value.match( rnothtmlwhite ) || [];
		}
		return [];
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			classes = classesToArray( value );
	
			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			classes = classesToArray( value );
	
			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value,
				isValidValue = type === "string" || Array.isArray( value );
	
			if ( typeof stateVal === "boolean" && isValidValue ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( isValidValue ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = classesToArray( value );
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, valueIsFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}
	
					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}
	
				return;
			}
	
			valueIsFunction = isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( valueIsFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( Array.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;
	
					if ( index < 0 ) {
						i = max;
	
					} else {
						i = one ? index : 0;
					}
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						/* eslint-disable no-cond-assign */
	
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
	
						/* eslint-enable no-cond-assign */
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( Array.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	support.focusin = "onfocusin" in window;
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		stopPropagationCallback = function( e ) {
			e.stopPropagation();
		};
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = lastElement = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
				lastElement = cur;
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
	
						if ( event.isPropagationStopped() ) {
							lastElement.addEventListener( type, stopPropagationCallback );
						}
	
						elem[ type ]();
	
						if ( event.isPropagationStopped() ) {
							lastElement.removeEventListener( type, stopPropagationCallback );
						}
	
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = Date.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( Array.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && toType( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {
	
				// If value is a function, invoke it and use its return value
				var value = isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;
	
				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				if ( val == null ) {
					return null;
				}
	
				if ( Array.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}
	
				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];
	
			if ( isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": JSON.parse,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// uncached part of the url
				uncached,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE <=8 - 11, Edge 12 - 15
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );
	
				// If data is available and should be processed, append data to url
				if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}
	
				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;
	
			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}
	
					// Propagate others as results
					done( -1, e );
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Ignore repeat invocations
				if ( completed ) {
					return;
				}
	
				completed = true;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( this[ 0 ] ) {
				if ( isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var htmlIsFunction = isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );
	
	
	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};
	
	
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.ontimeout =
										xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );
	
					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		var base, parsed, scripts;
	
		if ( !context ) {
	
			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );
	
				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}
	
		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
	
		// offset() relates an element's border box to the document origin
		offset: function( options ) {
	
			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var rect, win,
				elem = this[ 0 ];
	
			if ( !elem ) {
				return;
			}
	
			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}
	
			// Get document-relative position by adding viewport scroll to viewport-relative gBCR
			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;
			return {
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
		},
	
		// position() relates an element's margin box to its offset parent's padding box
		// This corresponds to the behavior of CSS absolute positioning
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset, doc,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// position:fixed elements are offset from the viewport, which itself always has zero offset
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume position:fixed implies availability of getBoundingClientRect
				offset = elem.getBoundingClientRect();
	
			} else {
				offset = this.offset();
	
				// Account for the *real* offset parent, which can be the document or its root element
				// when a statically positioned element is identified
				doc = elem.ownerDocument;
				offsetParent = elem.offsetParent || doc.documentElement;
				while ( offsetParent &&
					( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) {
	
					offsetParent = offsetParent.parentNode;
				}
				if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {
	
					// Incorporate borders into its offset, since they are outside its content origin
					parentOffset = jQuery( offsetParent ).offset();
					parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
					parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
				}
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
	
				// Coalesce documents and windows
				var win;
				if ( isWindow( elem ) ) {
					win = elem;
				} else if ( elem.nodeType === 9 ) {
					win = elem.defaultView;
				}
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( isWindow( elem ) ) {
	
						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	// Bind a function to a context, optionally partially applying any
	// arguments.
	// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
	// However, it is not slated for removal any time soon
	jQuery.proxy = function( fn, context ) {
		var tmp, args, proxy;
	
		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}
	
		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !isFunction( fn ) ) {
			return undefined;
		}
	
		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};
	
		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
		return proxy;
	};
	
	jQuery.holdReady = function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;
	jQuery.isFunction = isFunction;
	jQuery.isWindow = isWindow;
	jQuery.camelCase = camelCase;
	jQuery.type = toType;
	
	jQuery.now = Date.now;
	
	jQuery.isNumeric = function( obj ) {
	
		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&
	
			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	};
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	return jQuery;
	} );


/***/ })
/******/ ]);