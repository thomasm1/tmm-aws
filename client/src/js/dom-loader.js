console.log("dom-loa55der");
var secretButtonMP = document.querySelector('#secret-buttonMP'); // MY PHILOSOPHY (dailytech mission)
var secretParagraphMP = document.querySelector('#secret-paragraphMP');
//
var secretButton = document.querySelector('#secret-button'); // ME
var secretParagraph = document.querySelector('#secret-paragraph');




var secretButtonMPB = document.querySelector('#secret-buttonMPB'); // FEB
var secretParagraphMPB = document.querySelector('#secret-paragraphMPB');
var secretButtonMAR = document.querySelector('#secret-buttonMAR'); // MAR
var secretParagraphMAR = document.querySelector('#secret-paragraphMAR');
///////////////////////////////// 
var showSecret = false;
var showSecretMP = false;


var showSecretMPB = false;
var showSecretMAR = false;
/////////////////////////////// 
/*
secretButton.addEventListener('click', toggleSecretState);
secretButtonMP.addEventListener('click', toggleSecretStateMP);


secretButtonMPB.addEventListener('click', toggleSecretStateMPB);
updateSecretParagraphMPB();
secretButtonMAR.addEventListener('click', toggleSecretStateMAR);
updateSecretParagraphMAR();
*/
/////////////////////////////// 
function toggleSecretState() {
  showSecret = !showSecret;
  updateSecretParagraph();
  updateSecretButton()
};

function toggleSecretStateMP() {
  showSecretMP = !showSecretMP;
  updateSecretParagraphMP();
  updateSecretButtonMP()
};



function toggleSecretStateMPB() {
  showSecretMPB = !showSecretMPB;
  updateSecretParagraphMPB();
  updateSecretButtonMPB()
};

function toggleSecretStateMAR() {
  showSecretMAR = !showSecretMAR;
  updateSecretParagraphMAR();
  updateSecretButtonMAR()
};
/////////////////////////////// 
function updateSecretButton() {
  if (showSecret) {
    secretButton.textContent = 'About Thomas'; // GOES BACK TO DEFAULT
  } else {
    secretButton.textContent = ' Thomas M. Maestas'; // TOGGLE OPEN
  }
}

function updateSecretButtonMP() {
  if (showSecretMP) {
    secretButtonMP.innerHTML = 'DAILY &nbsp;&nbsp;  TECH &nbsp;&nbsp; MISSION &nbsp; STATEMENT'; // GOES BACK TO DEFAULT
    secretButtonMP.style.fontFamily = 'Monoton';
  } else {
    secretButtonMP.innerHTML = 'DAILY &nbsp;&nbsp;  TECH &nbsp;&nbsp; MISSION  &nbsp; STATEMENT ';
    secretButtonMP.style.fontFamily = 'Monoton';
  }
};



function updateSecretButtonMPB() {
  if (showSecretMPB) {
    secretButtonMPB.innerHTML = 'DAILY &nbsp;&nbsp;  TECH &nbsp;&nbsp; BLOG &nbsp;&nbsp;  ARCHIVES'; // GOES BACK TO DEFAULT
    secretButtonMP.style.fontFamily = 'Monoton';
  } else {
    secretButtonMPB.innerHTML = 'OUR  &nbsp;&nbsp;  DAILY &nbsp;&nbsp;  TECH &nbsp;&nbsp; FEBRUARY ';
    secretButtonMP.style.fontFamily = 'Monoton';
  }
};

function updateSecretButtonMAR() {
  if (showSecretMAR) {
    secretButtonMAR.innerHTML = 'DAILY &nbsp;&nbsp;  TECH &nbsp;&nbsp; BLOG &nbsp;&nbsp;  ARCHIVES'; // GOES BACK TO DEFAULT
    secretButtonMAR.style.fontFamily = 'Monoton';
  } else {
    secretButtonMAR.innerHTML = 'OUR  &nbsp;&nbsp;  DAILY &nbsp;&nbsp;  TECH &nbsp;&nbsp; MARCH ';
    secretButtonMAR.style.fontFamily = 'Monoton';
  }
};
/////////////////////////////// 
function updateSecretParagraph() {
  if (showSecret) {
    secretParagraph.style.display = 'block';
    secretParagraph.style.fontFamily = 'Roboto';
    secretParagraph.style.backgroundColor = 'steelblue';
    secretParagraph.style.color = 'aliceblue';
    secretParagraph.style.textAlign = 'left';
    secretParagraph.innerHTML = `<div   ><h5 style="text-align:center">Hello, I'm Thomas, Thank you for  visiting my tech blog.</h5>
        <p class="firstparagraph">   Technology shapes much of my life, and in many respects it frames my future plans! <br />
        Technology is integral to my professional, academic, and enterprising endeavors, 
        and I hope to share helpful knowledge from what I've learned along the journey. Besides, 
        I love to chime in about so many topics of the Age... hope you enjoy!

       </p><p  class="firstparagraph"
        My consulting services focus on latest technology with a Master's level data analysis methodology.   My data analysis experience has focused on education evaluation in K-12 and higher education. Now, I handle nearly all domains of data analysis. I focus on web-app design and development, specializing in data visualization with JavaScript and Python programming language.<br /><br /> 
                   
   </p>
   <ul class="list-unstyled list-spaced left">
                                     <li>  Contractual Services and Consulting for Big &amp; Small Data and Web solutions since 2016 </span>

                                            <a href="http://www.thomasmaestas.net/services.html"> <span> T M M</span></a>
                                         
                                                 <li>Masters Sociology and Bachelors French History <a href="http://www.unm.edu" target="_blank"> <span>University of New Mexico, Albuquerque</span></a>
                                  
                                
                                  
                                               <li> Social Media
                                                <span><a href="https://www.quora.com" target="_blank">Quora,</a><a href="https://www.historum.com" target="_blank"> Historium, </a><a href="https://www.instagram.com" target="_blank">Instagram, </a><a href="https://www.facebook.com" target="_blank">Facebook, </a><a href="https://www.meetup.com" target="_blank">Meet-Up, </a> Hiking Group, and Alliance Francaise</span>
                             
                                                <li>Began sociology of education doctoral studies at <a href="http://www.umontreal.ca/" target="_blank">l'Universit&eacute; de Montr&eacute;al</a> in the Fall of 2016
                                                 </li>  
                                              <li>Lived in
<a href="https://www.parisinfo.com/" target="_blank">Paris, France</a> and
<a href="http://www.ny.gov/" target="_blank">New York</a> and <a href="https://www.visittheusa.com/state/texas" target="_blank">Texas.
</a>   </li>  
</ul>
</div>


`;

  } else {

    secretParagraph.style.display = 'none';

  }

};

////////
console.log("TMM PHILOSOPHY");

function updateSecretParagraphMP() {

  if (showSecretMP) {

    secretParagraphMP.style.display = 'block';

    secretParagraphMP.style.fontFamily = 'Roboto';
    secretParagraphMP.style.background = 'RGBA(1,2,2,.2)';

    secretParagraphMP.style.textAlign = 'left';
    secretParagraphMP.style.padding = '10px';
    secretParagraphMP.style.color = 'white';
    secretParagraphMP.innerHTML = `  
<h4 class="center">My Beliefs
</h4> 
<h4 class="center">&amp; Our Daily Tech Blog Mission</h4>

<p class="dailytitle" >by Thomas Maestas, MA</p> 
 
 <p class="firstparagraph">Dialectical Materialism<br />I construct my philosophical guidance from a post-Hegelian, Historical-Materialist Philosophy that sees improvement by each iteration of problem-solving. My personal philosophy holds that right actions and true knowledge begin with a final, teleological goal in sight, i.e., the <i>improvement of the Human condition</i>. <br />Post-Hegelian Logic determines a set, then compares the practical <i>thesis</i> of present empirical, perceived conditions against the ideal <i>antithesis</i> toward higher ethical, rational solutions, in order to achieve an improved synthesis, to again be repeated as a new thesis.</p>
<p class="firstparagraph">Sharing<br />    
Given that assumptions about population growth and climate change are true (I believe both are true), then global population well-being is threatened earlier than expected. Therefore, my antithesis holds that  smart, effective <i>Sharing of Burden</i>, Sharing of Power, and <i>Sharing of Resources</i> is critical to meeting the imminent challenges of the two said assumptions.  
</p>
<p class="firstparagraph">Diversity and Equality<br />
Workplace culture too often abides by the ethos of "work harder, not smarter." Non-diverse workplaces lack the full set of problem-solving tools that are necessary in a complex, diverse world. 
</p>
<p>A better workforce integration along gender, racial, and socio-economic lines is a more heterogeneous workforce: more agile, creative, and efficiently team-oriented workforce--in short, a smarter workforce.
</p> 
`;

  } else {

    secretParagraphMP.style.display = 'none';

  }

};



function updateSecretParagraphMPB() {

  if (showSecretMPB) {

    secretParagraphMPB.style.display = 'block';
    secretParagraphMPB.style.fontFamily = 'Roboto';
    secretParagraphMPB.style.opacity = '1';
    secretParagraphMPB.style.color = 'darkslategray';
    secretParagraphMPB.innerHTML = ` 
 
                <hr />
             
                <button id="afebtop">
                  <a href="#afebend">PAGE END</a>
                </button>        <hr />
                <h4>POSTS FEBRUARY 2018</h4>   <hr />
                <div id="18-02-10">



                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Musing Blockchain</h5>



                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 10, 2018</h6>
                  <h6>First Blog Post!</h6>






                  <h6 class="chapternumber dailytitle">Why are Sociologists now the Key Players in Data Analysis within the Domain of Blockchain Technologies?</h6>















                  <p class="firstparagraph">First, let me describe that blockchain technologies, i.e. Government contracts, Business contracts, Bitcoin
                    and other cryptocurrencies, all rely on network graph theory, both on the low-level programming technology
                    (peer-to-peer global ip networks) across the spectrum to high-level interfaces for institutional, corporate,
                    individual needs and uses. These blockchain "network" analyses depend on highly variable--and simultaneous--network
                    changes, node changes, and link changes; and, the latter three may arbitrarily change interdependantly
                    or not. </p>



                  <p>Therefore, blockchain technologies must first accomodate complex node variables for contracts (relationships)
                    that include arbitrarily hierarchical mappings and conditional data structures. Secondly, blockchain
                    tech must face analytical challenges that arise from informal practices
                    <sup>1</sup>, by which the organizational nodes (employees) choose to deviate from the employee role's protocol
                    for the sake of efficiency, convenience, company culture, and multiple other levels of human factors.</p>















                  <p> Sociologists Meyer &amp; Rowan's (1977)
                    <i>New Institutionalism</i> explains how employees change practices and decouple
                    <i>actual</i> organizational structure from recorded rules, as a function of organizational size, time,
                    convenience, etc. These continually new, unknown constraints on data must be intimately understood, non-algorithm
                    human understanding
                    <i>by at least one side </i>of the exchange. How do we recognize unwritten, soft rules and behaviors of
                    a bank, a person, or a company's internal bot? </p>



                  <p>The hard sciences domain of Software Engineering, Computer Science, and Mathematics have brilliantly brought
                    the world the blockchain tool, for which the Hard Sciences can only contribute little on how to interface
                    with social needs. Ask yourself, how well do 1,000 top blockchain-related programmers understand the
                    multi-dimensional layers of hierarchical social, corporate, and governmental relationship networks? Well
                    enough to differentiate qualitative meaning in the smart-contract? Fearfully, no.















                  </p>







                  <p>In the past, the layers of abstraction from raw technological tool to societal use was refined, improved,
                    integrated through multiple layers of "middlemen", such as lawyers, corporate lawyers, government institutions,
                    non-governmental, non-profit and for-profit actors. Blockchain technology, by its very nature, erases
                    the middlemen. Suddenly, one programmer, for example, is writing the same healthcare insurance crypto-contract,
                    that last month an entire team of hospital employees spent a month writing; then overseeing and managing
                    different facets of this same thing. </p>



                  <p>However, the crypto-contract, once deployed to the blockchain, auto-manages the rest, forever or for the
                    life of the contract. Therefore, rather than redoing the trials and errors of 200 years' Sociology Network
                    Analysts' research and analytical development. Therefore, medical and other social fields cannot and
                    should not turn to the Hard Sciences for solutions. These Med researchers and developers are already
                    at home, safe within the academic domain of the Raw Sciences of Medical Sociology, Public Health, and
                    so on. The next ten years of blockchain technology can either be defined by unwitting, piecemeal advances,
                    accompanied by frequent, non-improving distastrous crises. Or, the next ten years can follow Sociology's
                    Scientific Method toward a mildly turbulent, but stable and beautiful future. </p>







                  <p>















                    Examples aside, the primacy of the Sociology academic field in the early 21st century quickly becomes apparent on review
                    of the Sociologists' specialization in network theories imbued with symmetrical and asymmetrical relationships,
                    within social networks that change arbitrarily the direction, conditions, and values of those same relationships.
                    We Sociologists deal with real-time, logical and hierarchical network mappings that appear arbitrary,
                    yet are characterized by fixed patterns. </p>



                  <p>No other academic field than sociology has advanced into the details, and endless network rabbit-holes
                    that characterize societal behavior. Not until this second millenial decade could the marriage of Large
                    Number Statistical Theory become consumated with the brilliance of early 1900's Sociological French Network
                    Theories, like Maurice Halbswach's work on the clearly defined network patterns of a society's Collective
                    Memory.
                  </p>







                  <p>







                    No other academic field has collected and refined knowledge on network arbitrariness, such that Economic's "irrational behaviors"
                    and Mathematical "complexity models" do not
                    <i>touch to the bone</i> the meaning, the intersectionality of network analysis, which must incorporate
                    simultaneous node changes (person gets job /or/ does not get job), network changes (All get jobs /or/
                    only 3 of 15 network groups get jobs), and most importantly the
                    <i>relationship</i> changes (all jobs always useful /or/ half of job groups no longer useful) across time
                    and fixed. </p>







                  <p>Fine. So, why is Sociology's network theory so valuable beyond just the network insights gleaned from 19th
                    and 20th centuries' network problems? Follow: European sociology came of age in the analog social era,
                    while </strong> North American Sociology only recently come of age (Quebec in the 1960's [post-1968],
                    U.S. in the 1990's[post-1999], in the digital social era. Therefore, the problem-solving patterns of
                    past sociology are inherently small-data and more qualitative analysis, and thus only Sociology incorporates
                    "human-ness" into the billion rows and columns of quantitative--numbers-only--analysis.</p>







                  <p>For example, Oxford-developed S.I.E.N.A. Software accomplishes this task. SIENA--named for Simulation Investigation
                    for Empirical Network Analysis--software calculates the real-time values, direction, and conditions of
                    each relationship (link) in a network, simultaneously as each node, network, or alter-link changes or
                    is changed; with this, it is possible to isolate directional, conditional
                    <i>influence change</i> in real-time. Real-time sounds impossible, however, the SIENA documentation
                    <sup id="9one">2</sup> describes its program algorithm to the statistical analysis of network data, with the focus on
                    social networks. </p>







                  <p>An easy example to grasp this is the concept of whether a person
                    <i>self-selects</i>(e.g., due to subconscious leanings) into a group and thus matches to fruition the group's
                    behavior with little group influence? Or does this same person join a group and emulates the group's
                    behavior, by the group's influence over time. Sociological network analysis, using Snjder's SIENA software,
                    achieves the impossible with the closed, directed graph networks that characterize blockchain technology.
                    The network graph can be here understood as entire (complete) networks (i.e, the blockchain in its entirety
                    without hard forks), not as personal (egocentered) networks: Using this SIENA model allows for the necessary
                    assumptions that a set of nodes (social actors) is given, and all ties (links) between these nodes are
                    known - except perhaps for a moderate amount of missing data</p>







                  <p>If, and only if, this level of analysis may be achieved, the blockchain development may follow a linear,
                    directed path of maturity with social and world needs. Until that time, that Sociology Network Theorists
                    are called upon, blockchain developers will continue to bat their arms in the dark, stumbling over again
                    the same bugs. Sadly, this semi-opaque future implicates the same fate as those that attempt to use blockchain
                    for their currency, contract, and other societal needs--in this case, the blind will indeed lead the
                    blind. </p>







                  <p class="footnotes">
                    <a href="http://www.journals.uchicago.edu/doi/abs/10.1086/226550" target="_blank" id="9one">1. http://www.journals.uchicago.edu/doi/abs/10.1086/226550</a>
                    <br />







                    <a href="https://www.stats.ox.ac.uk/~snijders/siena/" target="_blank" id="9one">2. https://www.stats.ox.ac.uk/~snijders/siena/</a>







                  </p>







                </div>















                <div id="18-02-11">







                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Web Dev Affairs</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 11, 2018</h6>







                  <h6 class="chapternumber dailytitle">How Can We Best Modularize our App Designs in Order to Achieve the Much Vaunted "Separation of Concerns"?</h6>















                  <p class="firstparagraph">There was once a time for App Developers that our habits followed our inner-philosophers--as an Esteemed
                    Order of Coders--we held ourselves in the highest regard to separate form from function, and style from
                    structural design. Hence, in the early 2000's, a tri-partite, sensible world guided every web coder to
                    abide by The scaffolding of HTML, functionality of JavaScript, and styling of CSS. A decade later, we
                    must throw out this antiquated division of labor within web coding. </p>
                  <p>Library modularization, (think JQuery, JSX, Bootstrap, etc.) within Javascript ES16 reveals that modules
                    and components Must hold together CSS/HTML/JS, part by part. So, if a decade ago three teams handled
                    html, js, css, it is now requisite to divide up 3 teams to 3 components (a team for the carousel widget,
                    a team for the navigation widgets, and
                    <i> each</i> of these component teams
                    <strong>must</strong> be maintained together, not separately, the module's required html, js, css. </p>
                  <p>







                    This means that the new Division of Labour can no longer follow past patterns from 5 years ago. Otherwise, any and all coding
                    will necessarily begin to 'reinvent the wheel.' This is because any module, any library you go to, will
                    <i>already</i> have its HTML pre-configured, JS pre-configured, CSS pre-configured. Thus, attempts to extricate
                    new css from one module to another (or worse yet, sharing css of modules), will only invite eventual
                    misery, almost instantly setting booby traps for the next coders upon arrival.</p>



                  <p>So, where is the creativity? Where is the originality then? It is not gone. It has evolved to a higher
                    level of abstraction, leaving to automation the boring stuff. So, if Vanilla JS is considered malpractice
                    in the modern world, and if ad-hoc JQuery is mocked and scoffed at by React coders, then where is creativity?
                    If yesterday's craft was the hoisting of 15 javascript functions on each page, the New Art of modular
                    coding is akin to a game of Tetris. Part by part, module by module, the modern coder open-source window-browses
                    and window-shops; goes home, and cuts and pastes, and folds and clips, then assembles and hangs to dry.
                    Do Python programmers rewrite each particular module definition? That's absurd. Equally absurd is the
                    javascript programmer that rewrites from scratch their modules. </p>



                  <p>The esteemed Order of JavaScript Coders must wake up, and regain its work-load balance in this new age--an
                    age that each year since 2014, the JavaScript language is rewritten, each year now, in both syntactic
                    sugar and also fundamental structure--especially the importing and exporting of modules. Therefore, philosophical
                    Honor behooves each of us to a higher complexity, and a new commitment to, the "Separation of Concerns."
                    We can allow ourselves a break, thankful for Progress, a progress by which we must
                    <i>Stand on the Shoulders of Giants</i>, and Code-Create! </p>







                </div>















                <div id="18-02-12">
                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Web Dev Affairs</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 12, 2018</h6>







                  <h6 class="chapternumber dailytitle">Mark Zuckerberg's Innocence</h6>















                  <p class="firstparagraph">Facebook Scandals
                    <sup>1</sup> of recent months have demoralized the leadership for a role of misinformation in the Tech Age,
                    however I charge Mark Zuckerberg's innocence
                    <i>not</i> because all of us, as a society, were equally warned. Rather, arbitrary mathematical forces created
                    abnormal, never-before-seen network structural density and symmetry patterns. Technological shifts were
                    so efficient at multiplying and exacerbating misinformation because a curious sociological network phenomenon
                    rendered parts of our daily social learning and acculturating process to network forces out of our own
                    control.
                  </p>







                  <p>A January 2016 American Sociology Association Newsletter Editorial
                    <sup> 2</sup> from Sally T. Hillsman, in which she explained how the social mechanisms of our own misinformation
                    were not entirely within our own control to resist. In fact, the arbitrary (often random) social structural
                    changes from higher social-media hours, create an arbitrary social network structure whose links (in
                    their content and influence) begin to dominate over nodes (each of us). In other words, the sway of trends
                    and opinionated critical thought becomes dominated by the relationships, e.g., the "likes" and "shares",
                    leading to a statistically natural propensity toward homogeneity--a.k.a. group-think. The mechanism is
                    akin to peacefully swimming close and parallel to the coastline, and (due to random coastal floor structure),
                    a rip-tide suddenly ships you far out to sea--a fatal and tragic fate rendering experienced swimmers
                    out of their own control. Same principle with an arbitrary
                    <i>underlying and unseen</i> network structure.</p>
                  <p>Our social network structures always are prone to continual shift, and so the usual "interruptions" that
                    previously stopped this inward shift soon began to disappear. Hillsman explains: </p>







                  <p class="quote">Lies, half-truths, and misinformation spread so rapidly across the public through digital communication
                    that the timespan for thoughtful, effective correction or rebuttal is infinitesimal. Because of confirmation
                    Bias, misinformation and outright lies quickly strengthen preconceived truths or pre-held beliefs that
                    are already hard to change. </p>

                  <p>Therefore, even though we all have been pointedly warned,
                    <i> none of us</i> without advanced sociological analysis skills could understand that a curious network
                    phenomonenon--ultimately driven by some arbitrary mathematical calculation involving size, density, symmetry,
                    conditional influences, and the strength of ties outweighing network nodes. For the reasons of these
                    factors, our social inclinations were
                    <i>out of our control</i> -- no, but really, this time they were! </p>

                  <p>And so, we can learn from Sociology what steps to take in order to counteract random, but risky, network
                    phenomena -- because nobody likes to go for a swim at the beach, and unwittingly get shipped out to sea!







                  </p>







                  <p class="footnotes">







                    1. Wired Magazine
                    <i>Inside the Two Years that Shook Facebook--and the World</i> (February, 2018)
                    <a href="https://www.wired.com/story/inside-facebook-mark-zuckerberg-2-years-of-hell" target="_blank"> Wired Magazine, </a>







                    <br />







                    <br /> 2. ASA
                    <i>Footnotes</i>. (January, 2016)
                    <a href="http://www.asanet.org/footnotes/jan16/index.html" target="_blank">
                      www.asanet.org/footnotes/jan16/</a>















                  </p>











                </div>















                <div id="18-02-13">
                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Sociology Tomorrow!</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 13, 2018</h6>







                  <h6 class="chapternumber dailytitle">The Modern Doctors' Updated Preparation for the Oath
                    <sup>1</sup> of Hippocrates:
                    <br />On the 2015 Social Sciences Modification to the AAMC Medical College Admissions Test (MCAT)</h6>















                  <p class="firstparagraph">Other than college pre-med students, few know the MCAT exam--the gatekeeper of U.S. &amp; Canadian Medical
                    Schools--underwent a major modification in 2015.
                    <sup>2</sup> Much deeper than Biological and Technological updates, major sections were added and/or expanded
                    including the Social, Pyschological and Biological foundations of
                    <i>behavior</i>. Named the
                    <i>Health Systems Science</i>
                    <sup>3</sup>, the American Medical Association's modern, holistic approach articulates outcomes-based measures
                    for healthy living and disease prevention efforts. You could say the AMA is indeed,
                    <i>woke</i>. </p>
                  <p>But really, what's the difference and why would we care? And, who doesn't know that an apple-a-day keeps
                    the doctor away? Dr. Jeffrey Borkan, MD, PHD of Brown University's Warren Alpert Medical School, explains
                    the evident role of all those unnoticed social interactions involved in obtaining and consuming that
                    apple. Further, the spatial and economic
                    <i>availability</i> of that apple also plays a role in keeping the doctor away. Borkan explains:







                  </p>
                  <p class="quote">It's time for us to take a leap forward in educating physicians for the health care delivery models of
                    the future—those that aim to improve not just the health of the individual patient and their family,
                    but also the community and the population.
                    <sup>4</sup>







                  </p>
                  <p>What, then, specifically, are the mechanisms that a community network's aggregated health may be inextricably
                    tied up with
                    <i>our own</i> individual health? In short, they are the sharing of health-promoting resources, timely assistance,
                    health-promoting information channels -- all this, among the countless perks of a healthy social circle!















                  </p>







                  <p class="citations">
 






                    1.
                    <a target="_blank" href="http://www.greekmedicine.net/whos_who/The_Hippocratic_Oath.html">The Oath of Hippocrates</a>
                    <br /> 2.
                    <a target="_blank" href="https://students-residents.aamc.org/applying-medical-school/article/changing-mcat-exam/">The 2015 AAMA Changes to the Medical College Admissions Test</a>
                    <br /> 3.
                    <a target="_blank" href="https://www.ama-assn.org/education/teaching-new-content-health-systems-science">American Medical Association's
                      <i>Teaching New Content Health Systems Science</i>
                    </a>
                    <br /> 4.
                    <a target="_blank" href="https://www.ama-assn.org/education/teaching-new-content-health-systems-science">ibid.</a>
                    <br />







                  </p>















                </div>















                <div id="18-02-14">



                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">
                    <s>Web Dev Affairs</s> Sociology Tomorrow!</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 14, 2018</h6>
                  <p style="color:green;">
                    <i>Due to the Tragic Events in Florida, Tech to the Rescue blog Rescheduled to February 16th ...]</i>
                  </p>







                  <h6 class="chapternumber dailytitle">
                    <s>Tech to the Rescue: Secondary health effects of the Fitbit toward health-information sharing channels
                      within a community.</s>
                  </h6>















                  <p class="firstparagraph" style="color:green;">
                    <s>Given that a community network's aggregated health is inextricably, and symmetrically, tied up with
                      <i>our own</i> individual health, app-developers may design activity- and communication-based apps more
                      responsibly, and in touch with modern healthcare recommendations. After all, if the Saintly Mark Zuckerberg's
                      communication- and activity-based app inadvertantly led to novel, and deeply consequential, effects,
                      then ...
                      <br />
                  </p>







                  </s>
                  <span class="alert">* Given the Tragic Events in the School Shooting in Florida, I felt a topic of more gravity was in order
                    ... :(







                  </span>







                  <h6 class="chapternumber">







                    Feb 14, 2018</h6>







                  <h6 class="chapternumber dailytitle">A New Kernel, and the Manifestation of a Two-Hundred Year Problem named
                    <i>Anomie</i>
                  </h6>















                  <p class="firstparagraph">Given the tragic events at a Florida school over Valentine's Day, 2018, who can write about Fitbits? So,
                    thoughts and sympathy for those students today that endured this horror. 19 years after the first-of-its-kind
                    school shooting, we as an American society have not become 'numb' to these events. It hurts as much as
                    it did in 1999.</p>
                  <p> Darn that innocuous Spring day in 1999, when we heard the most absurd news-- students attacked their own
                    colleagues at Colombine? In my blog post from January 10, I wrote that American Sociology, along with
                    Qu&eacute;bec, came of age much later than European Sociology. The past 50 years' social changes and
                    new problems are generally atrributed for the increasing demand for sociological expertise after 1999,
                    after a singular, senseless tragedy of a school shooting--this event, like a small kernel of societal
                    desperation for a solution--led to a flurry of self-professed sociologists &agrave; la Michael Moore's
                    Colombine, and other social-responsibility themed social consciousness. So far, only mutually incompatible
                    solutions. The problem, however, is not new, only the manifestation of it.</p>
                  <p>Suicide rates in 19th century France, disproportionately high, also served as a symptomatic manifestation
                    of the same problem, called
                    <i>Anomie.</i>
                    <sup>1</sup> The term,
                    <i>Anomie</i>, coined by Emile Durkheim in the late 1800's, captured the sense of instability, cultural
                    and moral relativism that undermined a shared sense of meaning. Suicides, week-after-week, month-after-month?
                    In 1897 France, noone had ever seen it before--at such rates--and people wanted answers. Alas, a kernel
                    of social desperation leading to inquiry.</p>
                  <p>







                    People wanted to know why so many in the population responded negatively to the rapid changes, urbanization (Dreadful factory
                    conditions &agrave; la
                    <i>Taylorism's</i> calculated efficiency) new technologies, i.e. electricity, railroads, steam engines;
                    these created an arbitrarily new world, very suddenly. Suddenly, like trying for the first time a roller-coaster,
                    when all you've ever known has been the carousel. So, we see technology's role for well or for ill, our
                    job is to understand how to dial-in the tech specs necessary to keep society smiling on this roller coaster
                    through another, yet not altogether new, technological thrill-ride.















                  </p>







                  <p>







                    1.
                    <a href="https://www.researchgate.net/publication/228173911_The_Sociology_of_Suicide" target="_blank">1897, Suicide, &Eacute;mile Durkheim.</a>







                  </p>























                </div>



















                <div id="18-02-15">







                  <h5 class="title dailytech">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Musing Blockchain</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 15, 2018</h6>







                  <h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card</h6>



                  <h6>



                    <small class="jargon">Tech blockchain jargon alert ahead, with all effort made for clarity! I treat a broad overview of the
                      existing trajectory of blockchain-related micro-economic advancements. I make a technical &amp; contextualizing
                      <abbr title="this link just goes down 5 paragraphs to Feb. 17th">
                        <a href="#18-02-17"> three-part blog series in my Feb. 17-20 posts</a> on the micro-economic horizon of blockchain technologies.</abbr>
                    </small>



                  </h6>



                  <p class="firstparagraph">Has anyone else been underwhelmed by the lack of Bitcoin's daily
                    <i>presence</i>, despite its everpresence at the dinner tables and caf&eacute;s across America. Sure, it's
                    more of a "metropolitan" phenomenon; and sure, it's become an accepted global platform--along with myriad
                    other crypto-currencies, but it's exchange-worthiness remains shrowded, and misunderstood by many. Cryptocurrencies
                    are useful as a vehicle for investment, and yes, there are Bitcoin millionaires due to the currency's
                    rise to fame with last year's increase in value (from $1,000 to ~$20,000) etc., etc. But, so far its
                    contributions, uses, fame are one-sidedly
                    <i>macro-</i>economic. A recent CNET article
                    <sup>1</sup>, among others, documents miniscule (and not improving) percentage of
                    <i>actual</i> use at the "cash-registers" of society.</p>







                  <p>Is there something wrong with such little micro-economic usage? Not at all! According to general sociological
                    <i>Early Adopter</i> theory--based on Everett M. Roger's Diffusion of Innovations
                    <sup>2</sup>--the timeline of the Innovation Adoption Lifecycle is fairly ordinary. That is, the Roger's bell
                    curve ranges from the beginning innovators, to early adopters, early majority, and late majority. However,
                    the blockchain articles always miss the point. Currencies are more of a distraction compared to the genuine
                    usefulness for the every-person, in every-day affairs, on a given day--i.e., micro-economic use.</p>







                  <p>The true value, the kind that makes our lives easier on any given day, and for the every-person, is
                    <i>not</i> the currency, it is the contract, that allows for individualized, targeted sharing of specific
                    information--whether financial, governmental, or any other centralized database. An example is in order
                    before I continue, since we can all relate to the risk of using a credit or debit card, the risk most
                    notably concerning Target store credit card hacks a couple years ago. </p>
                  <p>Suppose a person shops at 3 different retailers, using a different credit card for each. For these 3 transactions,
                    this person had only needed to provide two discrete pieces of information about themselves for each transaction:
                    they prove they have the $27, $200, and $5; and they prove a third party(i.e.,CC or bank)will make that
                    $27, $200, or $5 available, if their client agrees. Instead, for each transaction, they open their
                    <i>entire</i> financial information, and can only hope that law-enforcement will prevent cyber-theft; and
                    if the store's databases are hacked, then tough-luck! </p>
                  <p>Crypto-contracts provide the technology for this individualized, risk-free transaction, rather than for
                    each transaction, providing the generalized information for individual transaction. Highly inefficient!
                    Nobody thinks to walk around with their life-savings in cash, then at the 7-11 store, to open their wad
                    of cash and peel out a bill. The credit card system, blessed as it is, did not previously have technology
                    to avoid this very thing. So, financial institutions have had to rely on the many layers of security,
                    passwords, pins, mothers' maiden names, etc. Then, based on the mathematics behind prime numbers, they
                    hope to keep your money safe in one, centralized spot--with a bright red target on it. </p>
                  <p>Now, the crypto-contract provides this decidedly *micro-economic* experience for the everyday person. And
                    that, my friends, has nothing to do with crypto-currencies. There is no micro-economic value in crypto-currency,
                    instead the crypto-
                    <i>contract</i> is the true, unsung hero, and a hero we will all get to know. [personal opinion - this hero's
                    name is the Ethereum Virtual Machine]. In any case, Crypto-contracts provide this ability to provide
                    pinpointed,
                    <i>specific, targeted information</i> as citizens, too. When we provide our drivers license number, for
                    the sake of renting that car, we provide every aspect of information of ourselves to Hertz. They don't
                    need this. They need to know only and exclusively driving-record related details--not the entire governmental
                    database of information about you!















                  </p>







                  <p>1.
                    <a href="https://www.cnet.com/news/bitcoin-cryptocurrency-big-in-investing-but-still-lousy-for-buying-a-sandwich/" target="_blank">https://www.cnet.com/news/bitcoin-cryptocurrency-big-in-investing-but-still-lousy-for-buying-a-sandwich/</a>



                  </p>



                  <p>







                    2.
                    <a href="https://eric.ed.gov/?id=ED065999" target="_blank">Rogers, E. M., & Shoemaker, F. F. (1971). Communication of Innovations; A Cross-Cultural Approach.</a>







                    <br />















                  </p>



                </div>















                <div id="18-02-16">



                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Web Dev Affairs</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 16, 2018</h6>







                  <h6 class="chapternumber dailytitle"> Tech on the Regret: Unintended, secondary effects of communication- and activity-based app-designs </h6>



























                  <p class="firstparagraph">Given that our app-use is inextricably tied up with our own behavior, activity/communication-based app
                    developers have in the past year accepted (mostly in word) a renewed responsibility. More like resposibility
                    for a multi-faceted power of influence granted to an industry, suddenly, disproportionately great, and
                    <i>semi-arbitrarily related</i> to the designer's intent (and control!). After all, if the Saintly Mark
                    Zuckerberg's activity/communication-based app inadvertantly led to novel, and deeply consequential, effects,
                    then anyone could. </p>
                  <p>After all, who could guess
                    <i>how</i> these app-design effects would affect the users, years later. Who do we think programmers are,
                    sociologists? More specifically, who could know
                    <i>which</i> mundane coding practices, arbitrary app-design--like sharing permissions/features? Sure, everyone
                    deep down knew their company practices yield unfathomable power of influence over the daily habits of
                    cell-users, a.k.a. everyone. The easy part is knowing; the hard part is learning how and why certain
                    app-features lead to behavioral risks.</p>
                  <p>There could be no better example than the Alcoholic faced with an intervention by a loving family longing
                    for change. The alcoholic could be forgiven for past misdeeds, but without actual
                    <i>Acknowledgement</i> of a crisis in direction, which necessitates professional help from social scientists.
                    Therefore, the recent
                    <i>acknowledgments</i> signify something deeper--they signify a humility that app-designers are not sociologists,
                    generally speaking. So, that means hiring sociologists, psychologists, anthropologists for every N
                    <small>th</small> app-coder and software engineer. History can't be rewritten, but it can be interpreted and
                    learned from. The acknowledgment is itself a victory if it induces learning from the raw, social sciences,
                    whose expertise
                    <i>can</i> predict how or why certain "life"-features, practices, and policies often unfold with undue and
                    unintended social consequences. </p>















                  <p>Water under the bridge, but going forward, it is one thing to claim a "renewed sense of remorse", another
                    to acknowledge, learn and change. Like last November
                    <sup>1</sup> when Facebook co-founder Sean Parker confessed certain designs like "social-validation feedback
                    loop" and other app-design intentions, while ignoring potential secondary effects on society. So, the
                    <i>Acknowledgment</i> is the big win here--not so much the remorse!







                  </p>







                  <p>1.
                    <a href="https://digitaladdictsblog.com/facebook-co-founder-says-company-built-to-exploit-you/" target="_blank">https://digitaladdictsblog.com/facebook-co-founder-says-company-built-to-exploit-you/</a>
                  </p>



                </div>















                <div id="18-02-17">
                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Musing Blockchain</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">



                    Feb 17-18, 2018
                    <br /> Weekend



                  </h6>







                  <h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part II:
                    <br />
                    <br />Seven Nuts &amp; Bolts Features of the New Blockchain Micro-Economy
                    <br />



                    <small class="jargon">Tech jargon alert ahead, with all effort made for clarity! Here, I provide a technical &amp; contextualizing
                      addition to my
                      <abbr title="this link just goes up 7 paragraphs to Feb. 15th">
                        <a href="#18-02-15"> February 15th blog post</a>
                      </abbr> on the micro-economic horizon of blockchain technologies. </small>
                  </h6>



                  <p class="firstparagraph">7 Ethereum-based technological features offer us a new world -- a decentralized new world, not dependent
                    on the centralized servers of Instagram, Comcast, T-Mobile, Amazon, etc. With that statement ends general
                    consensus among blockchain experts, pundits, and authors. However, if the current logistical obstacles
                    provide controversy and competing algorithms over sustainability, security, and scalability, then they
                    reveal much more about the general pathway of social uses (and potential effects) than they hide. In
                    my February 15th
                    <a href="#18-02-15">blog</a>, I touched on a few features of micro-economic uses so as to distinguish the more certain aspects
                    of the crypto-contract horizon.</p>



                  <p>
                    <strong>Prologue</strong>



                  </p>



                  <p>So, what are some core features of block-chain technology that affect the quality of our lives, and the
                    <i>productivity</i> of our work as a society of academics, public-sector and private-sector professionals?
                    First, a little background and context before I outline seven blockchain functionalities. The Ethereum
                    blockchain helps distinguish itself--and its blockchain-native language Solidity--from earlier tech,
                    like Bitcoin and other Proof of Work-based blockchains. Ethereum blockchain offers a syntax and programming
                    features, e.g. "looping", "recursion", with the full power of a
                    <i>Turing Complete</i> language--that is, given enough resources, the language can solve any programmable
                    problem. </p>







                  <p>More background and a clarifying metaphor are in order: The Bitcoin blockchain transaction resembles the
                    accounting system of a foos-ball table point rack with a basic calculator glued to the side. In contradistinction,
                    An Ethereum blockchain transaction would resemble a network of computers,
                    <i>which is itself,</i> a computer--hence, the name Ethereum Virtual Machine. This allows for Quickbooks
                    to calculate into a PDF to be sent via an email contract-signing program. Much more useful!</p>







                  <p>Therefore, Ethereum's Blockchain is more than a networked, chained list of blocks, like Bitcoin. The Ethereum
                    blockchain is actually a "Virtual Machine", like a a big networked "home computer". The native language
                    of the blockchain, Solidity, allows for an
                    <i>application binary interface</i>, ABI. So, for example, I can type up an Ethereum contract on my home
                    computer, then directly access by command line the blockchain itself. In layman's terms, the manner that
                    modern-day app, for example Instagram, is a centralized API (Application Programming Interface) that
                    allows one programming system to interact with another, such as Instragram offers a "sharing API" that
                    connects to hardware contacts, thus facitilating communicating with third-party aplications, like sharing
                    your instagram picture to your Facebook account, via your T-Mobile phone's contacts list. This API relationship
                    broadly describes the modern world we live in, wherein a Chryser driving system exchanges API information
                    with your T-Mobile Bluetooth network system, which exchanges API information with your own contact list,
                    and so on, and our lives are made easier. </p>







                  <p>So, are we out of the woods? Has Ethereum solved the blockchain question? Yes, if it were the 1920 pre-relativity
                    days; However, with the advent of quantum computing, potential security vulnerabilities immediately arise.
                    The reason being that digital math uses binary "on/off" calculations, while quantum math implicates a
                    tertiary,
                    <i>qubit</i> "simultaneous states". Therefore, we have now entered the 3rd generation of blockchain technology,
                    both programmable, but also quantum-proof due to mathematical graph features. For example, IOTA's blockchain
                    design utilizes a
                    <i>Winternitz One-Time Signature</i>, by which one's transaction is entered into with a private-key, and
                    the blockchain moreso resembles a "Tangle" of a directed graph, which allows for computational "states".
                    IOTA recently garnered criticism in January 2018 due to an unfortunate crypto-hack, that exposed an apparent
                    vulnerability. In truth, this was a case of user-error because users were
                    <i>re-using</i> their one-time keys, which significantly decreases security to the point that a home computer
                    could crack the code! I choose to not digress further, and quantum computing is not quite advanced enough
                    now to cause damage, but in the future could potentially split the blockchain in two, or other quantum
                    possibilities.



                  </p>



                  </p>



                  <p>In sum, the technical obstacles change each month, however one must not lose sight of the forest for the
                    trees. Social useablity, potential scope and of course unintended consequences have all finally begun
                    to emerge, at least in form, with little difference between the 2nd generation blockchain or the 3rd
                    generation Patrician directed graph blockchain. The underlying principle of the blockchain's micro-economic
                    utiliity through crypto-
                    <i>contracts</i> is the same, as opposed to plain crypto-currency. you know the usual bartering solutions
                    for Supply &amp; Demand leading to Economics Game Theory, etc. This is where we must take our leave of
                    the Hard Sciences of Mathematics, and enter the realm of Sociology, Psychology, Anthropology and Economics.



                  </p>



                  <p>



                  </p>



                </div>







                <div id="18-02-19">
                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Musing Blockchain</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">



                    Feb 19, 20189</h6>







                  <h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part III:
                    <br />
                    <br />Seven Features of the New Blockchain Micro-Economy
                    <br />



                    <small class="jargon">Tech jargon alert ahead, with all effort made for clarity! The first 3 of 7 new possibilities thanks
                      to the programmable blockchain.</small>
                  </h6>



                  <p class="firstparagraph">



                    The guiding light through the centuries of scientific paradigms, in the Kuhnian sense
                    <sup id="19-1">1</sup>, have derived from deductive ideas from above - whether priestly or royal decree. Then, the primacy
                    of the
                    <i>Scientific Method</i> from the Renaissance forward--punctuated first by Copernican Heliocentrism, then
                    other Paradigm Shifts--has directed rational and ethical norms in each respective period, e.g. Enlightenment
                    authors of 17th, 18th century. Fast forward to the modern period, wherein the current era's emerging
                    paradigm holds Sharing as a collective-priority and responsibility, then an amazing philosophical moment.
                    <i>Historical Materialism</i>
                    <sup>2</sup> prescribes what is directly here a novel Paradigm Shift by which authority is not derived from
                    governmental, financial sources, but rather the
                    <i>shared</i>societal consensus about cryptographic, mathematical proofs as true authority. Further, the
                    revolutionary shift also innately provides tools for implemention through decentralized, programmable
                    data-sharing. Cryptography has in a sense become a
                    <i>de jure</i> middle-person for identification and verification of property. </p>







                  <p>



                    <strong>I. Protecting rights through immutable records</strong>
                    <br />Inalieable Rights can now be identified and verified by the cryptographic authority of a mathematical
                    proof, rather than exclusively through governmental or financial institutions from above. The modern
                    period also has held this decentralized, individual authority as the
                    <i>a priori</i> starting points for philosophical proofs. Premises about truth begin with the conditions
                    of humankind, not idealogies. In fact, it was the
                    <i>Young Hegelians</i> of early 19th century Vienna &amp; Berlin, who ushered in the Modern Era of Western
                    Philosophy, by laying out Truth as inverted, beginning from the empirical "ground" upward. This "upside-down
                    tree" defines philosophical modernity. Jean-Paul Sartre wrote that the whole of
                    <i>Existentialism</i> and 20th century philsophy is a mere subset, and never escapes Continental Materialism,
                    as argued in Sartre's
                    <i>Search for a Method</i>.
                    <sup>3</sup>
                  </p>



                  <p>All of the Sciences, prodded by this Truth of Empiricism, followed suit through all the tech innovations
                    since Hegel. I'm so surprised by this, because for me, the role of cryptography is shocking on two levels.
                    First, cryptography resemblees philosophy rather than the Empiricism that I had envisioned would govern
                    social rule (Some once thought nuclear sciences held this role--no longer! Mathematics takes the crown.
                    Secondly, I'm still dumbfounded that a Paradigm Shift
                    <i>first</i> offers the tools to fulfill itself? Staggering to consider the arbitrary changes ahead for
                    a society that is provided the tools of social structural change first, but how quite convenient!



                  </p>







                  <p>
                    <strong>II. Bureaucratic Atomization in a True Sharing Economy</strong>
                  </p>



                  <p>It is satisfyingly reassuring to see the good-natured, altruistic efforts among the thousands, upon thousands
                    of open-source volunteers, and blockchain innovators, like Vitalik Buterin author of Ethereum Virtual
                    Machine, whose aims and efforts make staggering progress each quarter. The potential for removing the
                    "middle-person" from the day-to-day, micro-economic "cost of living". This goes for for the exchanging
                    of titles, legal documents, etc. </p>
                  <p>Sharing of Resources is, in my personal opinion, critical to global future--both out of increasing necessity
                    in allocating increasingly limited resources; an arbitrary rearrangement of
                    <i>Social Structure</i> and distribution of its resources. While the exponential population growth looms
                    on the near horizon, a clear, pre-existing solution begins with a focus on
                    <i>smart</i>, effective sharing of resources. The driving principle of sustainability is made convenient
                    by means of blockchain technology, extending for example to local economies, cooperatives, ride-sharing,
                    etc. </p>



                  <p>
                    <strong>III. Removing Double-Dipping from International Remittances </strong>



                  </p>



                  <p>
                    <i>"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take
                      away."



                    </i>



                    <br /> --Antoine de Saint-Exup&eacute;ry, 1939</p>



                  <p>







                    Taxes and tariffs are difficult enough, the double-dipping of the current international remittance system, &aacute; la Western
                    Union, does not reflect the global, sharing Economy of 2018. The existing remittance system (not speaking
                    to
                    <i>centralized</i>, middle-man alternatives like PayPay, etc.)--supposing if I wire $2 Loonie to a Canadian
                    friend's Canadian Bank--requires payments executed through two separate bank transactions in two national
                    payments systems, thus the sending country and receiving country each take a cut. Like everything else--c'est
                    la vie. Or is it? The beauty of Ethereum is that it "talks" well with others and across borders, while
                    Bitcoin remains of little use for micro-transactions that involve semi-basic calculations. The reason
                    being that Bitcoin blockchain language, Script, cannot support loops (while statements, etc.) </p>
                  <p>Currently, both EOS and Ethereum blockchains appear poised for the most financial-friendly blockchain tech.
                  </p>







                  <p>



                    <a href="https://www.economist.com/news/business/21722869-anti-establishment-technology-faces-ironic-turn-fortune-governments-may-be-big-backers"
                      target="_blank">1. https://www.economist.com/news/business/21722869-anti-establishment-technology-faces-ironic-turn-fortune-governments-may-be-big-backers</a>



                  </p>



                  <p>



                    2.
                    <a href="https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/" target="_blank">https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/</a>



                  </p>



                  <p>



                    3.
                    <a href="http://www.bard.edu/library/arendt/pdfs/Sartre-Search.pdf" target="_blank">
                      <i> Search for a Method</i>, Jean-Paul Sartre, 1957</a>.
                    <br />
                    <small>Sartre would later be awarded the Nobel Prize in 1964, but declined it.</small>
                  </p>



                  <p>



                    <a href="https://projektintegracija.pravo.hr/_download/repository/Kuhn_Structure_of_Scientific_Revolutions.pdf" target="_blank">4. Kuhn, Thomas, The Structure of Scientific Revolutions, </a>



                  </p>







                  <p>



                    <a href="https://hbr.org/2017/01/the-truth-about-blockchain" target="_blank">5. Harvard Business Review,
                      <i>The Truth about Blockchain, Feb. 2017. (This is an older article, but very clear &amp; insightful)</i>
                    </a>



                  </p>



                </div>







                <div id="18-02-20">
                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech"></h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">



                    Feb 20, 2019</h6>







                  <h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part IV:
                    <br />
                    <br />Seven Features of the New Blockchain Micro-Economy
                    <br />



                    <small class="jargon">Tech jargon alert ahead, with all effort made for clarity! The 4th through 7th outlined Features of the
                      New Blockchain Micro-Economy</small>
                  </h6>
                  <br />



                  <p class="firstparagraph">I feel that data is one of the more underestimated new commodities of the age. Most visualize data as rows
                    and columns, and at most only non-conditional dynamic data. Data are not so mute! Data, in most object-oriented
                    languages at least, represents
                    <i>functions</i>, conditions, and predicted values. And so, our own behavior, coupled with our networks'
                    behavior, coupled with predictive analytics--this represents a wealth of information beyond our attributed
                    or inherited traits. The programming is
                    <i>in</i> the data, however, citizens have become less and less involved, ceding app by centralized app
                    our own information and ensuring profit to 3rd party marketers. The centralized nature of the internet
                    allows for this, while the new landscape of
                    <i>decentralized applications</i> (DAPP) completely upends this structure of the status quo.



                  </p>







                  <p>
                    <strong>IV. Enabling citizens to own &amp; monetize their data (&amp; protect privacy)</strong>
                    <br /> Ethereum offers a decentralized solution to "owning" one's own data, as data can be decentralized and
                    returned to the individual's control, and
                    <i>profit</i>. As sure as the 19th century's "labor-hour" became commodified to a calculable asset, i.e.
                    property, which
                    <i>another</i> party controls and makes profit; And as sure as the 20th century's data analytics became
                    commodified into calculable assets for another party to take control and make profit; then only now in
                    this 21st century does technology offer a new, more egalitarian path.



                  </p>







                  <p>
                    <strong>V. Ensuring compensation for the Creators of Value
                      <br />
                    </strong>



                    So, how would decentralized innovations of blockchain
                    <i>distributed ledger</i> technology compensate those whose actions, behavior, opinions, friend-networks,
                    artwork, music, videos and other contributions profit the creator?



                  </p>



                  <p>
                    <strong>VI. The Halcyon Age of Transaction-Chain Enterprise</strong>
                  </p>



                  <p class="quote">



                    According to Greek Mythology, the days of eery, noticeable lack of storms have never been interpreted as a period of grace.
                    Moreso,
                    <i>Halcyon</i> tranquility only means a temporary moratorium on the winds and waves, imposed by Aeolus,
                    God of Wind, to protect the nesting eggs of Alcyone, his daughter. </p>



                  <p> If blockchain tech changes how we do research, analysis, and forecasting, as much as it changes international,
                    and cross-industry transactions, then are we faced with a similar dilemma as the "novelty", and double-dealing,
                    of multi-nationals of the 1990s? No, because blockchain renders organizations, even those with a spotty
                    past, into transparent, democratic, efficient, secure and easily scrutinized.



                  </p>



                  <p>



                    After all, without transparent proof, how else would I know my bananas are the "pura vida" Costa Rique&ntilde; ones? More
                    importantly, what was the carbon footprint of that banana's journey from its native soil to my breakfast
                    table? New blockchain companies like
                    <a href="https://www.provenance.org/">Provenance.org</a>,
                    <a href="http://www.skuchain.com/" target="_blank">skuchain</a>,
                    <a href="http://www.blockverify.io/">http://www.blockverify.io/</a> are a few noticeable game-changers. So, for bananas not backed by mathematical
                    proofs, I really have to ask myself, is it
                    <i>really</i> an authentic Fair Trade banana? </p>







                  <p>Transactions are hardly valuable in the products themselves, if removed from the value of the
                    <i>transaction per se</i>. International supply chain transactions, by virtue of a recently possible decentralized,
                    permanent record and monitoring, have begun to make inroads in agriculture, petroleum, pharmaceuticals,
                    food-supply and other multi-stage industries. </p>







                  <p>If corporate and governmental transactions are to be made public--many bearing enterprise or State secrets,
                    then will forecasting also go the way of birds? Possibly. Online platforms like Augur
                    <sup id="20-8">8</sup>are creating global, decentralized prediction markets, in domains like sports betting, financial
                    markets speculation and so forth. Armed with vast, transparent knowledge, the everyday person can now
                    access the whims and power of Aeolus, and forecasting the winds of Fortune.</p>







                  <p>



                    <strong>VII. Reinventing Government &amp; Democracy</strong>
                    <br /> ...to be completed...


                  </p>



                  <p>1.
                    <a href="https://www.provenance.org/" target="_blank">



                      https://www.provenance.org/



                    </a>
                  </p>




                  <p>2.
                    <a href="http://www.skuchain.com/" target="_blank">



                      http://www.skuchain.com/



                    </a>
                  </p>




                  <p>3.
                    <a href="http://www.blockverify.io/" target="_blank">



                      http://www.blockverify.io/



                    </a>
                  </p>





                </div>



                <div id="18-02-21">



                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Data Analysis Musing</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 21, 2018</h6>







                  <h6 class="chapternumber dailytitle">Facebook-Friendly Third-Generation Data Structures</h6>







                  <p class="firstparagraph">Today, I'm going to write about data structures, and challenges that face Vitalik Buterin and other blockchain
                    architects. ' Now, why in the
                    <i>world</i> would I or anyone else care about ooh, merge sorts, bubble sorts, classificatory trees, and
                    the advent of a third form of data structure? </p>



                  <p>Today, we live in an ever more relational world. With all our technology, we just can't wait to hear the
                    latest gossip about sister Becky's Boyfriend's Brother's Friend that
                    <i>also</i> got to meet Shakira. Gossip to one person is a valuable asset to the data analyst. Because,
                    how else could an algorithm draw simultaneous conclusions about two friends that "liked" the same Samsung
                    VR, and that they are both located near Best Buy. Thanks to classificatorial wisdom of AI &amp; plain
                    machine-learning? </p>



                  <p>These relational queries are simply too difficult for relational, row & column SQL data structures. In
                    fact, many queries are impossible, due to unprescient database schema architectures. Next, with the need
                    to "objectify" data into non-relational objects, rather than an antiquated, rigid row-and-column design.
                    Thus, the second major type of data structure is more flexible and adept in finding these relational
                    queries that are ever more in vogue. However, the crystal-like, pristine non-relational, No-SQL designs
                    quickly turn to spaghetti, and are poor for scalability. Between a rock and a hard place, a third data
                    structure has emerged in recent years.</p>
                  <p>



                    Graph Data Structures
                    <sup>2</sup> allow data queries that had otherwise been impossible to capture in an entity relationship diagram.
                    The ideal example to clarify is the manner that the Swiss banks' accounts were discovered to be hiding
                    vast amounts of hidden taxes, etc. The cover-up was so well-constructed that not until new, graph database
                    queries discovered patterns of money flow
                    <sup>1</sup>:



                  </p>



                  <p class="quote">



                    The data was then turned into a graph format to detect then fine-tune the connections between the nodes. The Swiss Leak held
                    around 60,000 files that contained information about over 100,000 clients in 203 countries, which means
                    that the resulting graph database had more than 275,000 nodes with 400,000 relationships among them.
                  </p>



                  <p class="quote">



                    By being able to easily visualise the networks around clients and accounts, the reporters found many more connections than
                    they had before, which lead to the Swiss Leaks revelations soon being shared with the public and regulators
                    across the globe.







                  </p>



                  <p>And you thought that plagiarism-detecting software was impressive for complexity! The beauty of this newly
                    available software (even Microsoft jumped on board in recent years) means that sociologists, economists
                    can begin to make better headway in the way that our many interactions become more complex with more
                    data. Remember, in the past ten minutes, more data information was just produced than most of human history!
                    Thus, new and upcoming needs in domains like content management &amp; access control, geo-routing (public
                    transportation), gene sequencing, bio-informatics, and so on. So, as technology takes us forward, and
                    we make our considerations, let's stick by the golden rules of parallel processing, scalability, and,
                    now, graph-network mindedness for the new data structures, and schema, of the Era!



                  </p>



                  <p>1.
                    <a href="https://www.globalbankingandfinance.com/how-a-graph-database-unearthed-major-financial-improprieties/" target="_blank">



                      https://www.globalbankingandfinance.com/how-a-graph-database-unearthed-major-financial-improprieties/



                    </a>
                  </p>



                  <p>



                    2.
                    <a href="https://neo4j.com/blog/analyzing-panama-papers-neo4j/">By being able to easily visualise the networks around clients and accounts, the reporters found many
                      more connections than they had before, which lead to the Swiss Leaks revelations soon being shared
                      with the public and regulators across the globe.







                    </a>
                    <br />Other major vendors in graph data structures based on Neo4j: OrientDB, ArangoDB, Titan, mongoDB, Complexible
                    Stardog, and Franz AllegroGraph.







                  </p>



                </div>







                <div id="18-02-21">



                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Musing Blockchain</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 22, 2018</h6>







                  <h6 class="chapternumber dailytitle">Languages</h6>







                  <p class="firstparagraph">While I've had blockchain-related topics on the mind lately, it seems I can't escape it as I broach new
                    fields--blockchain is everywhere! Well, I had begun my blog with intentions about the accelerated speed
                    of language and syntax formation, and the curious phenomenon I'd call, for lack of a better word or or
                    my own reading, "declarative-syntax-merging". This involves the curious, and largely unknown, growth
                    of JavaScript scripting language into almost every domain of web apps, data analysis, and even the bounds
                    of
                    <i>Logic</i> itself. Though I won't submit my readers to a history of a language, suffice it to say that,
                    "If a certain algorithm, device, or object is programmable, then it will eventually be programmed in
                    JavaScript."



                  </p>



                  <p>Without getting into technicals, I'll instead use a perfect metaphor--the manner by which English merged
                    with French, beginning with the conquests of William of Normandy, around 1096 onward. Almost a thousand
                    years later, we can see how English grammar inherited it's Anglo-Saxon Linguistic roots, along with the
                    core vocabulary; Then, as English vocabulary moves past the first few thousand core words, e.g. "milk"
                    or "house" from "melche" or "haus", then more than 70% of English Vocabulary is directly inherited from
                    French, e.g. "lactose" or "mansion" from "lait" or "maison".</p>



                  <p>Similarly, the language of the web and original browsers, JavaScript, has similarly morphed into a new
                    language called Solidity, but in only a micro-fraction of English's time. The usual FOMO logic propels
                    coding language use, for example FOMO induced Microsoft's flagship Text Editor, Visual Code, to adopt
                    it years ago.
                    <sup id="22-1">1</sup> The language of Ethereum Blockchain is Solidity, which like the above example, has two parents,
                    one non-legitimate. It is in all respects totally JavaScript, yet with object-oriented elements of C++.
                    For the layperson, let's just say Solidity resembles a "Liger", in it is at it's core JavaScript, yet
                    with increasing sophistication based on C++ logic, its head and torso has begun to resemble the powerful
                    machine-code of C++ ever more. And it is a beautiful, but curious phenomonenon.



                  </p>







                  <p>
                    <a href="http://www.ibtimes.co.uk/microsoft-adds-ethereum-language-solidity-visual-studio-1552171">http://www.ibtimes.co.uk/microsoft-adds-ethereum-language-solidity-visual-studio-1552171</a>



                  </p>







                </div>











                <div id="18-02-23">



                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Sociology Tomorrow!</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 23, 2018</h6>







                  <h6 class="chapternumber dailytitle">1.4 Million Reasons for more Women in Tech</h6>

                  <a href="#18-03-08" rel="stylesheet">
                    Blog addressed again March 8, 2018
                  </a>





                  <p class="firstparagraph">1.4 million
                    <i>new</i> jobs by 2020; End over end, year after year, the computer programming industry continues to add
                    another 20% more jobs each year, for the next five years. This is the only field that demand outstrips
                    the supply--and increasingly short supply. So much so, the US Department of Labor forecasts U.S. citizens
                    will be able to fill 39% of those positions; there are not enough Immigration visas (especially in the
                    Trumpian era of isolationism) to make up the rest. </p>



                  <p>



                  </p>



                  <p>So, how is it that only 14% of females in the entire field of cybersecurity? Silicon Valley is, at its
                    best, obscenely one-sided. At Google, only 17% of the company's tech jobs are filled by women. Facebook
                    women staff only 15% of tech jobs, and Twitter? 10% female. The figures on women in computer science
                    across the nation, across the entire industry are not improving, but
                    <i>declining</i>?
                    <sup>1</sup>



                  </p>



                  <p>Of course, we've heard these statistics from any given headline, and in the halls across the university
                    landscape, starting with Women in STEM (Science, Tech, Engineering, Mathematics) programs.
                    <sup>3</sup> Yet, why, with so much money, so many programs, so many non-governmental, non-profit effort?



                  </p>



                  <p>I argue that tech
                    <i>climate
                      <sup id="24-3"></sup>
                    </i> is directly to blame. Who then? Not a person, but principles are to blame. Culture--often defined as
                    shared beliefs, norms, language and behaviors--can hardly be changed, but it can be understood.



                    <br />There is a book, called "Program or be Programmed
                    <sup id="24-4">4</sup>
                  </p>, by which the author explains social consequences of a dichotomized society--between those that manipulate
                  the environment around them, whether automating tasks at work, or simply fixing a simple software bug,
                  by adding a comma. This literacy of the Current Era is akin to the 26-letter alphabet of written sentences
                  and paragraphs, and--not to be taken for granted--is the exclusive form of communication, outside of a
                  100-foot perimeter, up until 150 years ago. Knowledge is not power, the communication of knowledge is power.</p>



                  <p>I argue that today, the power is to program one application programming interface (API) to talk to another
                    API. In other words, the ability to directly communicate with software at the command-line is not now
                    a requisite skill, but promotions would not escape this necessity! So, now reverting back to the subject
                    of women in tech, American leadership is in deep peril without more female insight. I will finish by
                    citing that Ares, the violent, untamed Greek
                    <i>god of war</i>, cannot always drive the Capitalist engine; because She, Athena, the
                    <i>goddess of intelligence</i> represents true strategy!



                    <p>



                      1.
                      <a href="https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html" target="_blank">https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html</a>
                    </p>



                    <p>



                      2.
                      <a href="https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages" target="_blank">https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages</a>
                    </p>



                    <p>



                      3.
                      <a href="https://www.aauw.org/research/why-so-few/" target="_blank">https://www.aauw.org/research/why-so-few/</a>



                    </p>



                </div>



                <div id="18-02-24">



                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Web Dev Affairs</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 24-25, 2018
                    <br /> Weekend



                  </h6>







                  <h6 class="chapternumber dailytitle">Joys of Automation</h6>







                  <p class="firstparagraph">







                    While coding up a better shell for this website, I thought it's remarkable how our lives get easier and easier with each
                    passing year of tech. Using JavaScript--the primordial web-coding language--I marvel at the convenience
                    of delegating mundande coding stuff to taskrunners, like
                    <i>Gulp</i>--a programmable package manager that "bundles" up the libraries to be used in the app. It is
                    truly a joy! </p>



                  <p>I write four styling
                    <i>functions</i>, with about 16
                    <i>variables</i> and voil&agrave;! I finish in 3 hours what would have taken me 15 hours, then another 5
                    hours a month for upkeep. Instead, now, it's as though I wind up the clock, and need only periodically
                    check, and perhaps update a variable or two ... Technology. I'm gushing for joy.</p>



                  <p> This was mere JavaScript--with a truly
                    <i>Turing Complete</i>--pan-algorithm status--languages, the possibilities are 100-fold with Python language
                    library collection; this library collection includes NASA modules, mathematical proofs, and limitless
                    uses from web-scraping for unstructured data to an excellent data visualization collection. Sometimes
                    I feel like I'm in the Library of Congress, and better yet because, PIP, the Python package manager acts
                    and automates like a cyborg librarian, for lack of better imagery. </p>



                  <p>I just have so much joy watching a project come to life, and it's even a greater delight if this project
                    comes to life and stays alive, through the joys of automation!



                  </p>



                  </p>



                </div>



                <div id="18-02-26">



                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Musing Blockchain</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 26, 2018



                  </h6>







                  <h6 class="chapternumber dailytitle">Cryptocurrency's Cumbersome Carbon Footprint </h6>







                  <p class="firstparagraph">







                    I must confess that on the very day that Our Daily Tech Blog gets an under-the-head make-over for security's sake, I wrote
                    the new formatting file right over today's post. Amazing, and the two occurred nearly simultaneously
                    as I worked on them, their paths crossed and poof, gone! Same platform, and I paid the price! Whether
                    I change my ways is yet to be seen, but I shall continue with my original theme for the day, namely,
                    Sustainability, a.k.a. Carbon Footprint.</p>

                  <p class="quote">Power consumption is one of the major costs of bitcoin mining, as dedicated machines crunch the algorithms
                    that build a record of every single bitcoin transaction and are rewarded with tiny fractions of a bitcoin
                    for their efforts.
                    <sup id="explain">1</sup>

                  </p>

                  <p> Today I have a mild Critique and Praise for the blockchain sustainability problem caused by sky-high electricity
                    bills! Computer algorithms do waste electricity, not like your Widescreen. More electricity is gobbled
                    up by small and large mining operations in nearly every country than small nations!
                    <sup id="electricity">1</sup>. Ethereum, Bitcoin and a handful of other "Proof-of-Work" designs require electricity because
                    the investment in equipment itself is investment, but more importantly, two-way incentivation for mining
                    drives the system, and the scarcity demand through difficulty computations. </p>



                  <p>So, is the electricity consumption really
                    <i>correlated</i> with the value, scarcity, of the currency? Yes. Digiconomist--a cryptocurrency analysis
                    site
                    <sup id="digiconomist">3</sup> estimates
                    <i>each</i>Ethereum transaction represents a 45 Kilowatt-hour of electricity's mining. (A visa credit card
                    transaction is 0.00651 kWh. The entire Ethereum global blockchain could be "using as much as 4.2 Terawatt-hours
                    (tWh), or slightly more than the country of Cyprus
                    <sup id="cyprus">1</sup>." So, electricity comparisons are telling, but how does this relate to its environment impact,
                    sustainability itself?</p>

                  <p>Carbon Footprint, our energy consumption index, can be compared to another element of scarcity, which dictates
                    fluctuations in value: Gold. According to
                    <i>Digiconomist</i>, an average household's Carbon Footprint is about 10 tons of CO2 per year. The article
                    does the math for us very succinctly: </p>

                  <p class="quote">On top of this, we can find that the process of mining Bitcoin isn’t just more energy-intensive, but also
                    has a bigger environmental impact. To reach that conclusion, we first need to estimate the carbon footprint
                    for both. For Bitcoin we can, again, get this number from the Bitcoin Energy Consumption Index. For gold,
                    we assume a carbon footprint of 20 tons of CO2e per every kilogram of gold mined
                    <sup id="digiconomist2">3</sup>.

                  </p>

                  <p>The article continues to clarify that 33,000 kilograms of CO2 per unit mines (comparatively, one Bitcoin's
                    worth of Gold is 4,000 kilograms of CO2). At the end of the day, the electricity costs--if not sustainable
                    long-term--could spell trouble. Hence, the three S's, mentioned last, sustainability is perhaps a larger
                    issue than blockchain Security and Scalability challenges. Again, this is a problem that the third largest
                    cryptocurrency does not have:
                    <i>Ripple</i>, which does not bear a carbon footprint
                    <sup id="ripple">4</sup>.

                  </p>

                  <p></p>

                  <p>

                    0.
                    <a href="https://www.cnet.com/how-to/bitcoin-ethereum-or-litecoin-which-cryptocurrency-is-best-for-you/" target="_blank">https://www.cnet.com/how-to/bitcoin-ethereum-or-litecoin-which-cryptocurrency-is-best-for-you/</a>
                    <br />For those new to cryptocurrencies, this is a fairly succinct article to cryptocurrencies, and their underlying
                    structure.

                  </p>
                  <p>



                    1.
                    <a href="https://motherboard.vice.com/en_us/article/d3zn9a/ethereum-mining-transaction-electricity-consumption-bitcoin" target="_blank">https://motherboard.vice.com/en_us/article/d3zn9a/ethereum-mining-transaction-electricity-consumption-bitcoin</a>

                  </p>
                  <p>

                    2.
                    <a href="http://www.wired.co.uk/article/how-much-energy-does-bitcoin-mining-really-use" target="_blank">http://www.wired.co.uk/article/how-much-energy-does-bitcoin-mining-really-use</a>

                  </p>
                  <p>

                    3.
                    <a href="https://digiconomist.net/bitcoin-mining-more-polluting-than-gold-mining" target="_blank">https://digiconomist.net/bitcoin-mining-more-polluting-than-gold-mining</a>

                  </p>
                  <p>

                    4.
                    <a href="https://ripple.com/xrp/" target="_blank">https://ripple.com/xrp/</a>

                  </p>
                  <p>

                </div>

                <div id="18-02-27">

                  <h5 class="title dailytech">OUR DAILY TECH</h5>

                  <h5 class="subdailytech">Web Dev Affairs</h5>



                  <p class="author">by Thomas Maestas, MA</p>



                  <h6 class="chapternumber">



                    Feb 27, 2018</h6>



                  <h6 class="chapternumber dailytitle">After Yesterday's Scathing Post, A Look at my own Carbon Footprint </h6>



                  <p class="firstparagraph">In my reflections about environment sustainability issues, I confess I'm sort of a hypocrite ... The whole
                    matter that caused my own introspection begins with my usual daily vexation: Tangles of wires!
                    <br /> &nbsp; ... I've been having electricity issues, here as of late ...</p>

                  <p>

                    On one side, my tiny Yoga Ultrabook usually likes to charge just fine with my phone charger--if I'm stuck without my charger.
                    And due to an untimely end to the charger, I needed a replacement. So, singular errand of the day was
                    a trip to Best Buy to peruse for a 45-Watt USB-C charger ( the new oval charging port on Samsung 8's,
                    LG G6's and newer Apple products).
                    <p>Meanwhile, my credit-card sized Raspberry Pi computer runs on an old-school USB charger--a whole Linux
                      Server Tower on a cell-phone charger. Then, we have my trusty Dell (actual) Tower with 16 Gigs of RAM,
                      2-terabytes, etc. that also seems to need an extra fan to stay cool--probably the sustainability of
                      100 Raspberry computers. My entire carbon footprint changes more with the electrical products that
                      I use, than my vehicle! Well, I also confess my Jeep Cherokee can't even boast 20 miles per hour ...
                      oops, conscience pangs, ouch ... Well, hypocritical, slightly, but found not guilty since I'm a bike-commuter
                      for life!</p>

                    <p>

                    </p>

                </div>
                <div id="18-02-28">

                  <h5 class="title dailytech">OUR DAILY TECH</h5>

                  <h5 class="subdailytech">Musing Blockchain</h5>



                  <p class="author">by Thomas Maestas, MA</p>



                  <h6 class="chapternumber">



                    Feb 28, 2018</h6>



                  <h6 class="chapternumber dailytitle">One Last Word about Bitcoin's Carbon Footprint </h6>



                  <p class="firstparagraph">Environmental Sustainability, again, and a higher-level view of the dilemmea...I couldn't resist:
                    <br /> Bitcoin's Initial Coin Offering was 2011 or so, then Ethereum, with Ether for currency was 2015; These
                    two, ever so prescient designs, also have their Achilles Heal. These two are
                    <strong>"Proof of Work" currency algorithsms</strong>. This means that the "Demand" side of supply-and-demand,
                    derives from
                    <i>difficulty levels</i> of crypto-blocks to mine. So, miners are incentivized to spend $1500 on a semi-mediocre-good
                    mining rig (which is basically 20 NVIDIA Graphics Cards tied together to stack of two-by-fours with lots
                    of fans ... erhem, sustainability?...</p>
                  <p>And for each block that is "solved", hence the block being validated, and somebody's cryptocurrency purchase/transaction
                    is resolved! (takes about 12 minutes for the whole global blockchain to cycle, and Ethereum is less than
                    a minute). So, the whole cycle continues, churning through coal- and carbon-stained hands of the electricity
                    fed to these crypto-mining rigs
                    <sup>1</sup>. For many it's a hobby, like the British Hobbyists' love for ham- and short-wave radio setups,
                    yet this profitable, yet particular hobby resembles the 1870's coal factory smoke stacks in South London!
                  </p>

                  <p>
                    Let's face it, if Ethereum is able to successfully hard-fork to a Proof-of-Stake system soon--and Vitalik Buterin and his
                    crew assure us it is coming
                    <sup>2</sup>--then great--problem solved, everything eventually converts to Ethereum. If
                    <i>not</i>they face an existential threat. Because, in a more enlightened ten years from now, those mining
                    depots
                    <i>would</i> look like unfettered factory smoke-stacks. Proof-of-Stack, whose currency value is not set
                    to difficult of algorithm puzzle (hence,
                    <i>proof-of-work</i>, but rather to ownership of "voting pools", which is a
                    <i>
                      <strong>Consensus-Based Blockchain algorithm</strong>
                    </i> [Complex subject best reserved for a rainy day, or better yet, no day! I may revisit this alternative
                    in a funner way, here's a glimpse from Vitalk's @VitalikButerin tweet yesterday:</p>
                  <p class="quote">Question for mathematicians: is there a assumed-to-be-normal number (ie. digits are random, like pi or
                    e) where you can calculate the nth digit in log(n) (or even polylog(n)) time? If so, then H(x) = digits[x
                    ... x+100] seems like it would be a cool cryptographic hash algo.</p>
                  <p>Now, I am by no means a detective, but by the sound of those tweets, the Proof-of-Work algorithm seems
                    to still be of utmost importance ... </p>
                  <p>
                    1.
                    <a href="https://blockexplorer.com/news/ethereum-launches-casper-testnet-paving-way-proof-stake/" target="_blank">https://blockexplorer.com/news/ethereum-launches-casper-testnet-paving-way-proof-stake/</a>
                    and also,
                    <a href="https://www.trustnodes.com/2017/11/28/ethereums-proof-stake-casper-testnet-nears-launch" target="_blank">https://www.trustnodes.com/2017/11/28/ethereums-proof-stake-casper-testnet-nears-launch</a>
                  </p>
                </div>


     
    <button id="afebend" >
    <a href="#afebtop">PAGE TOP</a>
  </button>     
   <p> &copy; 2018 All Rights Reserved. &nbsp; |

  <a style="color:yellow;text-decoration:none;" href="http://www.thomasmaestas.net">thomasmaestas.net &nbsp; |</a>
  <a style="color:yellow;text-decoration:none;" href="mailto:thomas@ourdailytech.com"> thomas@ourdailytech.com &nbsp; |</a>


  <a title="Contact Information: thomasmaestas.net" href="http://www.thomasmaestas.net/profile.html#contactme"> Contact Information</a>
</p>  
`;

  } else {

    secretParagraphMPB.style.display = 'none';

  }

};



















function updateSecretParagraphMAR() {

  if (showSecretMAR) {

    secretParagraphMAR.style.display = 'block';
    secretParagraphMAR.style.fontFamily = 'Roboto';
    secretParagraphMAR.style.opacity = '1';
    secretParagraphMAR.style.color = 'darkslategray';
    secretParagraphMAR.innerHTML = `  

      <div id="18-03-24" class=" hidden   mar 18-03 -24">
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
      
      <h5 class="  subdailytech">Sociology Tomorrow!</h5>
      
      <p class="  author">by Thomas Maestas, MA</p>
      
      <h6 class="  chapternumber">March 24-25, 2018<br />
      Weekend </h6>
      
      <h6 class="dailytitle chapternumber">1968 Meets 2018
      </h6>
      <p class="firstparagraph">Washington D.C.  
      Not Normally does WonderWoman Show her Face
      </p>
      
      <p>  </p>
      </div> 
      
      <div id="18-03-23" class="    mar 18-03 -23">
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
      
      <h5 class="  subdailytech">Musing Blockchain</h5>
      
      <p class="  author">by Thomas Maestas, MA</p>
      
      <h6 class="  chapternumber">March 23, 2018 </h6>
      
      <h6 class="dailytitle chapternumber"><i>It's not about the Blockchain, the Efficient Network Data Distribution is the Answer!</i>
      </h6>
      <p class="firstparagraph">Last week and this week, the out-of-control handgun problem is in the news. This leads one to believe there is a problem with the <i>definition</i> of a gun. As always. Definitions start wars and world wars--after all of last century, did anyone decide who controls the Coal of Sudetenland?? You can bet everyone there speaks two languages, still. The <i>definitional </i> answer makes the answer: This is why Blockchain technology--straddled between myriad start-ups, countless institutions and a hundred brilliant minds is The answer to our scalability problems.   
      
      </p><p>The problem is that data structures grow at differential rates, some exponential, some linear, some slower, some as a function of time or other variable.  Yet, our data analysis needs are clear: We need a new technology to handle quickly, securely and efficiently the <i>Networked, Relational Data Problem</i>, which scales exponentially with traditional data structures, like old-fashioned Excel-like Row-&amp;-Column data structures. Yet, as one would logarithmize the equation to best adapt new data, so must the computer data structure adjust accordingly. </p>
      <p>Too rigid, the world turned to relational, non-Structured Query Language (SQL) data, partially for the need to dislate <i>data objects</i> from their tables. The world needed that cell as a free-radical in order to mimic the data structure of societally-networked society.  Alas, a science already at hard work with Cambridge Analytica--again what's that field of study called again, Sociology, right? </p>
      <p>
      
      </p></div> 
      <div id="18-03-22" class="   S mar 18-03 -22">
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
      
      <h5 class="  subdailytech">Web Dev Affairs </h5>
      
      <p class="  author">by Thomas Maestas, MA</p>
      
      <h6 class="  chapternumber">March 22, 2018 </h6>
      
      <h6 class="dailytitle chapternumber">A.I. Part II: Problems with Scale, Kindly Resolved by A.I.
      </h6>
      <p class="firstparagraph">I mistakenly laid waste to A.I.'s reputation in my last post. It <i>did</i> let us, our whole society, let us down, and maybe the forensics will give us <i>a few excuses</i> down on the road. However, "homicide by A.I. (aka Uber)" will need to be updated in records. But, artificial intelligence is not at fault. There are a few software engineers that did the best they could--with the time their superiors gave them.  Uber leadership, let's hope, will be deterred from future carelessnes to come.   </p>
      
      <p>That diatribe said, I do appreciate an Uber's proximity when I'm stranded at 2:00 am in a bad part of town. Why? Because I don't need to plan ahead -- Uber is there! And, sadly, I don't need to read or study -- Google is there! But wait, don't judge me, I'm not lazy! That being said, I have my own soul-searching to do: TECHNOLOGY AIDS AND ABETS ME AND MY ACTIONS, but it does not run my show> Only I take responsibility for my own actions: I allow technology into my life as a tool, and yet I   hold the power cord. I take responsibility for the tech that follows me--and believe me, I need that tech. And so do you. Not only so, but the world, and the ecological fate of our <i style="color:green">green earth</i>> also depends on tech, A.I. specifically. </p>
      <p>
      Humankind has already dug an ecological (dare I say 'alkaline') pit deeper than can be dug out of: Flooding, forest fires, and Species Extinctions. A.I. is <i style="color:brown"> is </i>> the only viable hope so we, i.e. Uber, shouldn't prematurely spoil its development. 
      </p>
      <p class="quote">Several questions raise their ugly head when A.I. can't help Earth or humankind. Like it or not, A.I. will need to 3-D print the dykes for the sunken coastal cities--like tiny island Den Haague, the most beautiful city in the world. Next, A.I. will make irrelevant fossil fuels by 2030, if not before; and those caught polluting would be fined to death, anyway. Without A.I., none of these worthwhile goals are possible. This precarious, difficult and most of all laborious job of designing our own solutions will take time: For this reason, Uber should be shamed even further for their short-cuts, and eventual errors of internal, organizational problems. <i>Uber's experiemental, tax-free "Testing Sandbox" cannot be the erstwhile safe neighborhoods of Surburban Phoenix, without proper caution.</i> </p>		
      <p>Are Uber's corporate desires, market stronghold, and shareholders' delight more worthwhile than <i>an entire sensitive field of machine-learning research?</i> No. Uber must be warned to not steal corporate secrets from Waymo, then proceed to be 86'd from California, then brush aside with excuses the <i>killing of an innocent Arizona bicyclist</i>.</p>
      <p>
      Who can count the number of very feisty taxi-men and -women that are not fans of the infamously hasty culture of Uber. The team of lawyers needed to be 86'd from France? Uber already knows, because maybe they know B.D.O! 
      </p>
      <p></p>
      <p class="cite">3.
      <a href="https://www.theguardian.com/technology/2017/apr/07/uber-waymo-lawsuit-lidar" target="_blank">https://www.theguardian.com/technology/2017/apr/07/uber-waymo-lawsuit-lidar</a>
      </p>
      </div> 
      <div id="18-03-21" class="    mar 18-03 -21  ">
      <hr />
      <button>
      <a href="#top">Top</a>
      </button>&nbsp;
      <h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
      
      <h5 class="  subdailytech">Web Dev Affairs </h5>
      
      <p class="  author">by Thomas Maestas, MA</p>
      
      <h6 class="  chapternumber">March 21, 2018 </h6>
      
      <h6 class="dailytitle chapternumber">Hey Uber Driver, Please Slow Down!
      </h6>
      <p class="firstparagraph">A.I. generally, and specifically Uber's Self-Driving Tech, both have failed society this week. Although we could all debate the merits of "Lidar", i.e. laser-based vision, the primary concern, in my view, is Uber's obvious carelessness in rushing their self-driving tech.  Although six thousand (6,000 too many) pedestrians are killed in the U.S. annually, I'd only hope AI wouldn't add to the problem.<sup>2</sup> The Arizona victim was walking her bicycle when struck, and I as bike-commuter can't help but take the affair personally. </p>
      <p>This first human death is at least a <strong>big Wake-Up moment</strong> for the industry in its haste to roll out A.I. tech.  After all, Uber's questionable leadership morals<sup>2</sup> and being kicked out of San Francisco for running more than six red-lights raises eyebrows to begin with.<sup>3</sup> My problem with Uber is that the car's algorithm, with perfect Lidar vision, did not flinch or slow down for two seconds as it killed the victim. Humans flinch and humans swerve, because protecting fellow humans is in our DNA, not in A.I.'s. So, while we now know Uber's software hasn't caught up with its A.I.-Lidar hardware--let's hope we see defensive driving and some <i>TLC</i> programmed into those A.I. Algorithms!
      </p>
      <p class="cite">1.
      <a href="https://www.theguardian.com/technology/2018/mar/22/video-released-of-uber-self-driving-crash-that-killed-woman-in-arizona" target="_blank">https://www.theguardian.com/technology/2018/mar/22/video-released-of-uber-self-driving-crash-that-killed-woman-in-arizona</a>
      </p>
      
      <p class="cite">2.
      <a href="https://www.theguardian.com/technology/2017/apr/07/uber-waymo-lawsuit-lidar" target="_blank">https://www.theguardian.com/technology/2017/apr/07/uber-waymo-lawsuit-lidar</a>
      </p>
      <p class="cite">3.
      <a href="http://fortune.com/2017/02/26/uber-self-driving-car-red-lights/" target="_blank">http://fortune.com/2017/02/26/uber-self-driving-car-red-lights/</a>
      </p>
      
      </div>
      <div id="18-03-20" class="  mar 18-03 -20">
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
      
      <h5 class="  subdailytech">Web Dev Affairs </h5>
      
      <p class="  author">by Thomas Maestas, MA</p>
      
      <h6 class="  chapternumber">March 20, 2018 </h6>
      
      <h6 class="dailytitle chapternumber">The Facebook Fiasco: Why Zuckerberg Should not have Dropped out of Harvard
      </h6>
      <p class="firstparagraph">
      Universities, private or public institutions, serve as a beacon for
      <strong>the Fearless Protection and Ethical Regulation</strong> of information and data. This is because data and data research
      is innate to the university's Mission Statement, whereas business and governmental institutions are relatively new
      to the game, and often at odds with the
      <i>Academy</i>, and occasionally against each other. </p>
      <p class="quote">Threats to student data privacy existed long before the internet. The FBI under J. Edgar Hoover infiltrated Berkeley
      student groups to counter communism in the 1960s. Around the same time, the CIA manipulated the National Student
      Association for intelligence gathering in other anti-communism efforts. But the privacy issue is more acute now
      that the amount of student data in cloud-based systems has grown exponentially and is more widely dispersed.
      <sup>2</sup>
      </p>
      <p> The University's expertise over ethically regulated data collection and management, is better than government, business,
      and even medical domains for two reasons. First, the institution's long history and ethical motives with data are
      unique. The norms of data-handling have been codified through the University's Institutional Review Board based
      on its
      <strong>stated mission</strong>. In other words, Universities take data seriously
      <i>for reasons other than corporate profit or governmental control</i>. An example of personal data precautions has
      played out with Harvard's recent data tiffs leading to the Supreme Court, illustrated by a 2016 article: </p>
      <p class="quote">Last week undergraduates at Harvard University raised concerns about the institution handing over their data to an
      anti-affirmative action group as part of a lawsuit. Students for Fair Admissions, which is suing the university
      for allegedly discriminating against Asian American applicants, will have access to “academic, extracurricular,
      demographic and other information” from all undergrads who applied to Harvard between the fall 2009 and spring 2015,
      omitting names and Social Security numbers.
      <sup>2</sup>
      </p>
      <p>The second reason why Universities understand ethical implications for data is that data and more broadly data and
      human information
      <i>research</i> is the institutions' second highest priority, along with teaching and service. For example, in response
      to the unethical Public Health research in
      <i>Tuskegee Syphilis experiements</i>, the University instution
      <i>stepped in</i> to help design the 1978
      <strong>Belmont Principles</strong>. Currently, the University Institutional Review Board incorporates this with the Nuremburg
      Code (developed after WWII NAZI research), in handling data research.
      </p>
      <p>In recent days,
      <i>private companies</i> claim expertise for regulating "Fake News", and you guessed it,
      <strong>regulation of data privacy &amp; confidentiality.</strong><sup>3</sup> The ethical authority over data privacy norms are nowhere
      else than the University campus, case in point Harvard... Let the governments govern and the enterprises enterprise,
      and leave the
      <i>thoughtful, ethical regulation of data collection and precaution </i> to the Ivory Tower. Corporate and Government
      self-regulation is opaque enough!</p>
      
      
      <p class="cite">1.
      <a href="https://www.theguardian.com/technology/2018/mar/21/mark-zuckerberg-response-facebook-cambridge-analytica"
        target="_blank">https://www.theguardian.com/technology/2018/mar/21/mark-zuckerberg-response-facebook-cambridge-analytica</a>
      </p>
      <p class="cite">2.
      <a href="https://www.edsurge.com/news/2016-10-26-pursuing-academic-freedom-and-data-privacy-is-a-balancing-act"
        target="_blank">https://www.edsurge.com/news/2016-10-26-pursuing-academic-freedom-and-data-privacy-is-a-balancing-act</a>
      </p>
      <p class="cite">3.
      <a href="https://www.bloomberg.com/news/articles/2018-03-21/paul-ford-facebook-is-why-we-need-a-digital-protection-agency"
      target="_blank">https://www.bloomberg.com/news/articles/2018-03-21/paul-ford-facebook-is-why-we-need-a-digital-protection-agency</a>
      </p>
      
      </div>
      
      <div id="18-03-19" class="  mar 18-03 -19">
      
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
      
      <h5 class="  subdailytech">Sociology Tomorrow!</h5>
      
      <p class="  author">by Thomas Maestas, MA</p>
      
      <h6 class="  chapternumber">March 19, 2018</h6>
      
      <h6 class="dailytitle chapternumber">A New Politics of Power:
      <br /> The Cryptographic Financial Escape Hatch
      </h6>
      <p>I had originally intended for a post on the very lamentable
      <i>Blockbuster-ization</i> and eventual demise of Toys-"R"-Us, but Tech Affairs happen too quickly! Instead ...</p>
      <p class="firstparagraph">Today, US inserted itself into a large, deep debate about crypto-legitimacy by imposing new sanctions on Venezuela.
      In case you hadn't heard, here's a quick recap:</p>
      <p class="quote">The administration’s announcement came a few hours after Mr. Trump signed an executive order barring the use of any
      digital currency issued by the Maduro government since Jan. 9. Mr. Maduro announced last month that his country
      had begun a presale of the Petro, backed by the nation’s vast petroleum reserves.
      <br />
      <br />The Venezuelan government called the launch a response to a financial crisis that has prompted a profound devaluation
      of the national currency, the bolívar, and quadruple-digit inflation.
      <sup>1</sup>
      </p>
      <p>
      This turn of events, both Maduro et al.'s financial cleverness and Trump's action to de-legitimate the Petro crypto-currency,
      are examples of the undefined, near-limitless political uses for Blockchain Tech, both offensively and defensively.
      In fact, the ensuing events may be of great interest as we will witness a major first actual use-case of the decentralizing
      aims of crypto-technology tool. A tool that softens the financial leverage wielded by centralized authorities, whether
      governmental or private.
      </p>
      <p>I used the term "de-legitimate" above because there are two processes at work: First, crypto-currencies are
      <i>in themselves</i> not legitimate. A
      <strong>crypto-currency platform gains legitimacy through a series of both technical and financial trust-building stages</strong>.
      So legitimacy is earned first privately, and some currency platforms continue publicly to Initial Coin Offering,
      and so on--purely financial and technical legitimacy.
      </p>
      <p>And then, there is the another kind of legitimacy, which involves political leverage ... </p>
      <p class="cite">1.
      <a href="https://www.nytimes.com/2018/03/19/world/americas/trump-venezuela-sanctions-petro.html" target="_blank">https://www.nytimes.com/2018/03/19/world/americas/trump-venezuela-sanctions-petro.html</a>
      </p>
      
      </div>
      
      <div id="18-03-17" class="  mar 18-03 -17">
      
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
      
      <h5 class="  subdailytech">Musing Blockchain</h5>
      
      <p class="  author">by Thomas Maestas, MA</p>
      
      <h6 class="  chapternumber">March 17-18 2018
      <br /> Weekend
      </h6>
      
      <h6 class="dailytitle chapternumber"> Energy Alternatives Signal the Power Shift to Come, Part II: A Ripple and an Iota of Sustainable Crypto-Currency
      </h6>
      <p class="firstparagraph">Iota and Ripple cryptocurrencies use different technology than traditional blockchain in order to achieve their distributed
      ledgers. Traditionally, outside "miners" validate the block's
      <i> transaction records</i> as it replicates to the next "block." For example, a transaction is validated 2 or three
      times, and since three miners' validations all agree, one is kept and two are destroyed, in a nutshell; one example
      of computations (
      <strong>and hence coal</strong>) that cost too much time and energy.</p>
      <p>Unlike this arrangement, Iota, Ripple, and Hedera use a directed-acyclic-graph (DAG) data structure (shaped like
      a sideways genealogy tree) that relies on "consensus" from its nearest neighbor transaction nodes.
      <sup>1</sup>
      </p>
      <p>Enough with the jargon! The bottom line is that Bitcoin's tech is not eco-sustainable,
      <sup>2</sup> and so alternatives are already closing in on Bitcoin. Iota, the 8th largest cryptocurrency Iota delivers
      open-source transparency, lightning speed, and yet is it cryptographically sound? Not according to some tech pundits:
      </p>
      <p class="quote">You might think that IOTA, a cryptocurrency worth over a billion dollars, and working with organizations like Microsoft,
      University College London, Innogy, and Bosch, BNY Mellon, Cisco, and Foxconn (through the Trusted IOT Alliance)
      would not have fairly obvious vulnerabilities, but unfortunately, that’s not the case. When we took a look at their
      system, we found a serious vulnerability and textbook insecure code.
      <br />
      <br /> “In 2017, leaving your crypto algorithm vulnerable to differential cryptanalysis is a rookie mistake. It says that
      no one of any calibre analyzed their system, and that the odds that their fix makes the system secure is low,” states
      Bruce Schneier, renowned security technologist, about IOTA when we shared our attack.
      <sup>3</sup>
      </p>
      <p>And so, with a 1.9 billion market cap, I sometimes have to reflect on the immensity and non-relational fact and figures
      of our technological world! Security and other bugs are hard to avoid when an industry is moving too fast for thoroughly
      tested betas; and each iteration involves a series of bug-patches, with short- and long-term priorities stretched
      with new design &amp; function trade-offs.</p>
      <p>
      Full life-cycle software development, from napkin-idea to rolling specs, always follows these patterns yet not always with
      so much money on the line! Here's a closer look at one critique of Iota:</p>
      <p class="quote">
      IOTA developers had written their own hash function, it was a huge red flag ... I think it’s important to reiterate that
      the IOTA developers do not agree with our characterization of this as an issue of concern. Our report lays out more
      details about why we are concerned.
      <br />
      <br /> There are other red flags — unlike every other program running on your laptop or phone, IOTA uses ternary instead
      of binary. Since all computer hardware today uses binary, IOTA converts to ternary in software, which is less efficient
      and more complex. This complexity prevents IOTA from benefiting from existing security analysis tools that are designed
      to work with binary, and makes the code harder to read and understand.
      <br />
      <br /> The current IOTA tangle requires a trusted party (the coordinator) for security, suggesting that in its current
      form it’s not ready to run as a truly permissionless, decentralized system.
      <sup>3</sup>
      </p><p>
      Optimizing, not sacrificing, should be the name of the game as Tech closes in on Blockchain challenges of security, scalability,
      and that evers-so-costly
      <strong>Sustainability!</strong>
      </p>
      <p>1.
      <a href="https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain"
        target="_blank">https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain</a>
      </p>
      <p>2.
      <a href="
      https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal
      " target="_blank"> https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal </a>
      </p>
      <p>3.
      <a href="
      https://medium.com/@neha/cryptographic-vulnerabilities-in-iota-9a6a9ddc4367
      " target="_blank"> https://medium.com/@neha/cryptographic-vulnerabilities-in-iota-9a6a9ddc4367</a>
      </p>
      
      
      </div>
      
      <div id="18-03-16" class="  mar 18-03 -17">
      
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
      
      <h5 class="  subdailytech">Musing Blockchain</h5>
      
      <p class="  author">by Thomas Maestas, MA</p>
      
      <h6 class="  chapternumber">March 16, 2018</h6>
      
      <h6 class="dailytitle chapternumber"> Energy Alternatives Signal the Power Shift to Come
      </h6>
      
      <p class="firstparagraph">Sustainability for the environment means an accelerated transition to renewables. While other nations have undertaken
      big steps toward wind and solar - even China's pollution declined in 2014 for the first time
      <sup>1</sup>. EU is now 30% renewable--from 12% in 2000 to expected 50% renewable energy by 2030
      <sup>2</sup>. Us, it appears, not so much...ouch.</p>
      <p>What can we do then, in our lives, to make our own contribution. Well, besides less fossil fuels and red meat, we
      can choose our cryptocurrencies more conscientiously. One NY town's recent actions echo my own concerns about the
      enormous carbon footprint of "Proof-of-Work" blockchain mining.
      </p>
      <p class="quote">
      The city of Plattsburgh has put a moratorium on cryptocurrency mining to preserve natural resources, the health of its residents
      and the city’s “character and direction,” officials said after a public hearing Thursday. For 18 months, the 20,000-resident
      city will not consider new applications for commercial cryptocurrency mining. Violators will face fines of up to
      $1,000 for each day they defy the moratorium.
      <sup>3</sup>
      </p>
      <p>So, me too - count me out, I can't help but do the same, and pronounce my own refrain from Bitcoin (this is more
      spiritual since I don't own, nor mine). In contrast, I'll put Ethereum on hold since they are transitioning to a
      zero carbon-footprint by year's end. </p>
      <p>And, for the most environmentally friendly cryptocurrencies, I wholly support Ripple (3rd highest valued cryptocurrency)
      and also clean
      <i>Iota</i> (8th highest valued )
      <sup>5</sup>. Ripple, unfortunately, is a private company with a less-accessible internal distributed ledger. And yet,
      Hedera Hashgraph heralds the most optimistic news of all: A blindlingly fast Hashgraph structure, unbound from any
      carbon footprint.
      </p>
      <p>1.
      <a href="http://www.wri.org/blog/2017/01/china%E2%80%99s-decline-coal-consumption-drives-global-slowdown-emissions"
        target="_blank">http://www.wri.org/blog/2017/01/china%E2%80%99s-decline-coal-consumption-drives-global-slowdown-emissions</a>
      </p>
      <p>2.
      <a href="https://qz.com/1193603/two-countries-are-the-reason-the-eu-is-hitting-its-ambitious-renewable-energy-targets/"
        target="_blank">https://qz.com/1193603/two-countries-are-the-reason-the-eu-is-hitting-its-ambitious-renewable-energy-targets/</a>
      </p>
      <p>3.
      <a href="https://www.washingtonpost.com/business/economy/upstate-new-york-town-bans-bitcoin-mining/2018/03/16/bd6f669e-2947-11e8-bc72-077aa4dab9ef_story.html?utm_term=.6282ea8429d5"
        target="_blank">https://www.washingtonpost.com/business/economy/upstate-new-york-town-bans-bitcoin-mining</a>
      </p>
      <p>4.
      <a href="https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain"
        target="_blank">https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain</a>
      </p>
      </div>
      
      <div id="18-03-15" class="  mar 18-03 -15">
      
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
      
      <h5 class="  subdailytech">Web Dev Affairs</h5>
      
      <p class="  author">by Thomas Maestas, MA</p>
      
      <h6 class="  chapternumber">March 15, 2018</h6>
      
      <h6 class="dailytitle chapternumber">I Love this Record Baby but I Can't See Straight Anymore:
      <br />It's Gonna be Okay, Flip that Record and Just Dance!
      </h6>
      <p>-Lady Gaga</p>
      <br />
      <p class="firstparagraph">
      <strong>Creators in the Digital Age</strong>, especially Musicians, have faced just a panoply of business model challenges,
      notably since the 2000s'
      <i>Napster Era</i>. And yet, this is the age-old-case of new technologies reshaping long-standing fields, especially
      financial structure - the bottom line! All creative fields also have technological features on the horizon that
      may, potentially move the playing field. First some recent background: </p>
      <p class="quote">
      While [Taylor Swift] is certainly making money in retail sales and digital downloads, both of those metrics are spiraling
      downward as people migrate away from the concept of owning music at all. Nielsen recently released numbers indicating
      substantial drops in both CD and digital-track sales, which are down almost $100 million
      <i>year over year</i> from 2014; streaming music continues to grow, but the revenue it generates isn’t close to making
      up the difference, yet.
      <sup>1</sup>
      </p>
      <p>Most remember Taylor Swift's 2014 industry-shaking album withdraw in protest to Spotify's payment structure. The
      next year Taylor took on Apple iTunes--to which Apple bended to Taylor's Way
      <sup>2</sup>. These wins are amazing but not enough, if only for winning battles in a losing war. </p>
      <p class="quote">Spotify is the future. Spotify is the enemy. Spotify doesn’t pay enough. Spotify is music’s best bet for revenue
      growth. Since it arrived in the United States from Sweden in 2011, Spotify has been cast as both hero and villain
      in the music industry’s continuing debate over streaming music. </p>
      <p class="quote">
      It has been hailed as a potential savior through a two-tiered “freemium” model that would gradually lure listeners away from
      piracy. Yet Spotify’s royalty rates have also terrified many artists already worried that each new step in music’s
      digital evolution further devalues their work.
      <sup>3</sup>
      </p>
      <p>So the trend looks dire, and yet is it really? Where, just where are the
      <strong>Tech Platforms </strong> leading us? Tech is leading us
      <i>nowhere</i>, at least not to one
      <strong>singular, centralized place</strong>; rather, decentralized tech--including but not limited to blockchain--is busy
      rewriting the boundaries between creators and consumers. This Tuesday's Forbes article reported on new subscription-based
      model by Patreon. Still classical Web 2.0, it's novelty appears so simple, almost intuitive in potentially new pathway:</p>
      <p class="quote">"On Kickstarter and Indiegogo, creators essentially have to start over every time," says Danny Rimer, a partner at
      Index Ventures who is a Patreon investor and board member. "It's the same reason software companies went from licensed
      software to subscriptions: predictable revenue and better service for customers."
      <sup>4</sup>
      </p>
      <p>
      Apparently Patreon, along with last November's
      <i>Drip</i> by KickStarter have made headway. Patreon paid out $150 million to its artists in 2017, and each are doubling
      annually. Decentralizing again. Well, we say we can't
      <i>go back to the way it was</i>, but Tech always seems to lead us back to the way it was!
      </p>
      <p>1.
      <a href="https://www.nytimes.com/2016/01/25/magazine/touring-cant-save-musicians-in-the-age-of-spotify.html" target="_blank">https://www.nytimes.com/2016/01/25/magazine/touring-cant-save-musicians-in-the-age-of-spotify.html
      </a>
      </p>
      <p>2.
      <a href="http://www.businessinsider.com/taylor-swift-new-album-reputation-not-on-spotify-apple-music-streaming-2017-11"
        target="_blank">http://www.businessinsider.com/taylor-swift-new-album-reputation-not-on-spotify-apple-music-streaming-2017-11
      </a>
      </p>
      <p>3.
      <a href="https://www.nytimes.com/2014/11/12/business/media/taylor-swifts-stand-on-royalties-draws-a-rebuttal-from-spotify.html"
        target="_blank">https://www.nytimes.com/2014/11/12/business/media/taylor-swifts-stand-on-royalties-draws-a-rebuttal-from-spotify.html
      </a>
      </p>
      
      
      <p>4.
      <a href="https://www.forbes.com/sites/kathleenchaykowski/2018/02/13/digital-medici-how-this-musician-turned-entrepreneur-plans-to-save-creators-from-advertising/#6063ea771313"
        target="_blank">https://www.forbes.com/sites/kathleenchaykowski/2018/02/13/digital-medici-how-this-musician-turned-entrepreneur-plans-to-save-creators-from-advertising
      </a>
      </p>
      </div>
      
      <div id="18-03-14" class="  mar 18-03 -14">
      
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
      
      <h5 class="  subdailytech">Sociology Tomorrow!</h5>
      
      <p class="  author">by Thomas Maestas, MA</p>
      
      <h6 class="  chapternumber">March 14, 2018</h6>
      
      <h6 class="dailytitle chapternumber">
      <i>Tou
        <strong>Demou</strong> tes
        <strong> Krates</strong>
      </i>:
      <br />Strength of the People</h6>
      
      <p class="firstparagraph">Today's demonstrations and walk-outs, led by America's Youth and followed by many of the education staff, has aimed
      directly at Gun-Control legislation. Yet, the message more powerfully articulated than ever by adolescent-turns-adult
      students, takes aim at something further afield. </p>
      <p>Students, remembering the February 14th massacre victims, take aim at the corruption stemming from the 2010 Supreme
      Court "Person-hood" protection for Corporations, also known as the
      <i>Citizens United</i> Decision. A dated, but poignant, article from National Public Radio explains:
      </p>
      <p class="quote">The Supreme Court extended that protection to corporations, and over time also extended some — but not all — of the
      rights guaranteed to individuals in the Bill of Rights.
      <sup>1</sup>
      </p>
      <p>
      Yet, it appears deceptively harmless for Congressional Law-makers to protect corporations, in the form of
      <strong>Gun Manufacturers' Lobbyists, </strong>
      as equally as it protects humans. The origin or this ruling dates to a 70's Neo-Liberal, right-leaning legislation and Court
      rulings that include a pivotal 1978
      <i>First National Bank of Boston v. Belloti</i> decision allowing for corporations' ballot-initiative campaign contributions,
      citing the First Amendment.
      <sup>2</sup>
      </p>
      <p>
      
      The Result? The corporation, in "person" form, takes on Pseudo-Human qualities: immortal, beyond-measure capital, and programmatically
      serving stock-holders' interests with cut-throat competition at all costs. No match against a sympathetic human,
      yet the Corporation is given the same rights and privileges as the man in the street. Now, in the face of two decades'
      dead humans--as young as
      <i>Sandy Hook Elementary</i>, which were not protected by Legislation, due to commitments made to corporate lobbying.
      </p>
      <p>It appears increasingly difficult for Marco Rubio to accept money from gun lobbyists
      <i>in exchange</i> for executing their legislation demands. As I mentioned in my
      <a href="#18-02-14">February 14th post</a> on the topic, it is clear a generation is awakening: And, the Humans have begun to revolt
      against the
      <strong>Heavily-Armed Lobbying Machines!
      </strong>
      </p>
      <p>1.
      <a href="https://www.npr.org/2014/07/28/335288388/when-did-companies-become-people-excavating-the-legal-evolution"
        target="_blank">https://www.npr.org/2014/07/28/335288388/when-did-companies-become-people-excavating-the-legal-evolution</a>
      </p>
      <p>2.
      <a href="http://www.ncsl.org/research/elections-and-campaigns/campaign-finance-and-the-supreme-court.aspx#dnn_ctr77443_HtmlModule_lblContent"
        target="_blank">http://www.ncsl.org/research/elections-and-campaigns/campaign-finance-and-the-supreme-court.aspx</a>
      </p>
      http://www.ncsl.org/research/elections-and-campaigns/campaign-finance-and-the-supreme-court.aspx dnn_ctr77443_HtmlModule_lblContent
      </div> 
      <div id="18-03-13" class="mar 18-03 -13">
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>
      <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>
      
      <h5 class="subdailytech">Musing Blockchain</h5>
      
      <p class="author">by Thomas Maestas, MA</p>
      
      <h6 class="chapternumber">March 13, 2018</h6>
      
      <h6 class="dailytitle chapternumber">The Sharing Economy Hand-in-Hand with the Market Economy:
      <br /> Part III and Sustainability of Shared, Distributed Ledger Types</h6>
      
      <p class="firstparagraph">March 13th, 2018 marks the day that certain types of blockchain technologies, notably Bitcoin and Ethereum, face
      an existential crisis: Today, a new distributed ledger technology has been announced, which departs from the traditional
      "Proof-of-Work" (energy-intensive calculations) Blockchain technologies. This is critically important to zero carbon-footprint.
      For example, Bitcoin calculations drain more energy, 50 TeraWatt/hrs per year--higher than Singapore's 49.8!</p>
      <p>Next, the primary security flaw of consensus-based leadership like Ripple, Iota (as opposed to
      <i>random-selection blockchain leadership</i> based on carbon-intensive calculations) is they are susceptible to Hacking:
      Denial-of-Service Attacks are possible because the next leader Block can be anticipated and followed by a Bot),
      so the blockchain cycle is attacked at every cycle. </p>
      <p>The Heder Hashgraph unveiled today overcomes this problem by using a 39-node-leader hashgraph data structure. Interestingly,
      this is based on the original Visa Credit Card design from the 1950's (then called AmericaBank) for authenticating
      system. </p>
      <p>
      Next, The Heder Hashgraph overcomes the problem of "fairness" because blockchain transactions are
      <i>
        <strong>not ordered in each cycle</strong>.</i> Bitcoin transactions are haphazardly lumped together in each block-cycle,
      which is ~12 minutes. Which means that time-sensitive financial data queries will always lose! </p>
      <p>
      Swirld's unveiled their consensus-based
      <strong>Hashgraph, a type of distributed ledger technology (DLT),</strong> last year. Today, it has now been announced to
      deploy in late 2018 on the Hedera Hashgraph public network. This is tremendous news! Tremendous, since I explained
      in my
      <a href="#18-03-01">March 1st </a> blog post that older blockchain technologies incentivize miners' efforts by directly tying electrical-cost(
      (in calculations) to the Bitcoin/hour profit margin. For this reason, the future horizon just considerably shortened
      Bitcoin's runway for establishing anything beyond "early-adopter" status. </p>
      <p>So, we'll see if the innovating crew with Vitalik Buterin's Ethereum can successfully alter the crypto algorithm
      into it's planned carbon-free consensus-based, "proof-of-stake" form. For the moment, Bitcoin, Ethereum, and other
      electricity-draining "proof-of-work" designs, have their
      <strong>exchange value trapped inside their own Carbon Footprint</strong>.
      <sup>4</sup> And so, because environmental sustainablity is foremost of concerns for future investment, survival may
      depend on digging out of that Carbon Footprint much more quickly!</p>
      
      <p>1.
      <a href="https://www.forbes.com/sites/jeffkauflin/2018/03/13/hedera-hashgraph-thinks-it-can-one-up-bitcoin-and-ethereum-with-faster-transactions/#175e5c79abcb">
        https://www.forbes.com/sites/jeffkauflin/2018/03/13/hedera-hashgraph-thinks-it-can-one-up-bitcoin-and-ethereum-with-faster-transactions/#175e5c79abcb
      </a>
      </p>
      
      <p>2.
      <a href="https://www.coindesk.com/hedera-hashgraph-swirlds-no-fork-guarantee-cryptocurrency-touts-resistance-code-splits/"
        target="_blank">
        https://www.coindesk.com/hedera-hashgraph-swirlds-no-fork-guarantee-cryptocurrency-touts-resistance-code-splits/</a>
      </p>
      
      <p>3.
      <a href="https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/"
        target="_blank">
        https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/</a>
      </p>
      
      
      <p>4.
      <a href="https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/" target="_blank">https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/</a>
      </p>
      </div>
      
      <div class="mar 18-03 -12" id="18-03-12">
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>
      
      <h5 class="subdailytech">Sociology Tomorrow!</h5>
      
      <p class="author">by Thomas Maestas, MA</p>
      
      <h6 class="chapternumber">March 12, 2018</h6>
      
      <h6 class="dailytitle chapternumber">The Sharing Economy Hand-in-Hand with the Market Economy:
      <br /> Part II and New Forms of Trust</h6>
      <p class="firstparagraph">
      Throughout the centralized-tech period of the
      <i>mobile-powered </i> Web 2.0, most Sharing transactions take place on a centralized platform that simply facilitates
      the peer-to-peer transactions. However, the trust is based on some third-party authority. For instance, Uber serves
      as the centralalized, third-party authority between both consumers (whether resource-obtaining or resource-providing)
      must place their trust. Similarly, centralized authorities like Paypal, etc. enable peer-to-peer collaboration.
      Yet, the notion of trust remains unsolved: Both parties must place their faith in the third party. By definition,
      this problem that undermines the
      <i>Sharing Economy</i> is resolved by Blockchain technologies, through cryptography. Now, Decentralized Apps (DAPPS)
      provide a truer sharing platform for value transactions.
      </p>
      <p>In short, neither peer,
      <strong>neither consumer needs to be trusted, because both parties share a mutual trust in their shared ledger</strong>
      (think of a thick book with an indexed log of each and every transaction, with unchangeable entries etched by cryptography.
      In this fashion the forms of Exchange Value include:
      <br /> 1. Value Funds &amp; Investments
      <br /> 2. Immutable Insurance &amp; Risk Management
      <br /> 3. Account for &amp; Audit Commodified Value 4. Authenticate &amp; Attest to Value
      <br /> 5. Transfer, Store, Lend Value
      <br />
      </p>
      </div>
      
      <div class="mar 18-03 -10" id="18-03-10">
      
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>
      
      <h5 class="subdailytech">Web Dev</h5>
      
      <p class="author">by Thomas Maestas, MA</p>
      
      <h6 class="chapternumber">March 10-11, 2018
      <br /> Weekend
      </h6>
      
      <h6 class="dailytitle chapternumber">The Sharing Economy Hand-in-Hand with the Market Economy:
      <br /> Part I and the Race for Sustainability Solutions</h6>
      
      <p class="firstparagraph">Sharing can be a philosophy and even an ideology, but it is also
      <strong> a concept sewn into the Technology of the Era</strong>. Sharing economy refers to both democratized peer-to-peer
      marketplaces,
      <i>and</i> collaborative, resource-circulating consumption systems where the consumer&#39;s role is provider or obtainer
      of resources. By either sense, the
      <i>Uberized</i> economy is made possible by the underlying platform of Decentralized Technologies. Mobile social media,
      internet, and blockchain tech creates the conditions needed for a convenient, community-based transactions.</p>
      
      <p>Bitcoin and Ethereum crypto-contracts grab the headlines, however it is the very nature of blockchain&#39;s
      <i>distributed, i.e. shared, </i>ledger that revolutionizes how humans interact, and how they exchange and share goods
      and services. So, how might a transactional, zero-sum Market Economy merge with a Sharing Economy?</p>
      
      <p>In
      <i>The Third Industrial Revolution, </i>Social and Economic theorist, Dr. Jeremy Rifkin, provides insight into how
      the
      <strong>Sharing Economy can grow alongside the traditional Market Economy</strong>.
      <sup>1</sup> The theory argues three (3) breakthroughs are needed to create the conditions necessary for a new &quot;general
      purpose technological platform,&quot; and thus an Industrial Revolution. They are management/commmunication of power,
      sources of new power/energy, and the transportation of this power.</p>
      
      <p>The first condition: New forms of communication to
      <i>manage</i> power, for example steam-powered printing press, trans-oceanic telegraph, then later telephone. The second
      condition: New energy sources, for example steam-engine using coal and other fossil fuels. The third condition:
      New methods to transport energy, i.e. the steam engine on rails, then later fossil fuel vehicles.</p>
      
      <p>So what&#39;s new about today? 5G Cellular technology coupled with decentralized, blockchain internet; Second, improving
      solar &amp; wind power coupled with decentralized, bi-directional energy grid; and third, transporation by automatated,
      driverless shipping for example. So, why is this important, even vital to adapt a new paradigm that fits the new
      technology? exponential populstion growth and exponential climate changes are top of the list.</p>
      
      <p>Britain&#39;s innovations with steam &amp; coal characterized the first Industrial Revolution, and America&#39;s
      innovations in telephones, oil-fueled vehicles, and centralized transportation grid, however the innovations in
      the present era are much quicker than previous eras... which means we as a society can embrace more proactively
      the New Paradigm needed to adapt.</p>
      
      <p>So, how can we change the way we
      <i>think</i> and how we
      <i>react</i> depends on our worldview, and how deeply entrenched. Thomas Kuhn&#39;s 2004 publication on
      <strong>
        <i>The Structure of Scientific Revolution</i>
      </strong>
      <sup>3</sup> explains how society will drag its feet in the face of change, and only after decades of controversy will
      a New Paradigm Shift emerge. In this occasion however, we as a society may not have the luxury of decades to adapt
      to New Technologies, as the carbon hangover from the previous Industrial Era imperils the safe arrival of the next!</p>
      
      <p>&nbsp;</p>
      
      <p>1.
      <a href="https://www.foet.org/books/the-third-industrial-revolution/" target="_blank">https://www.foet.org/books/the-third-industrial-revolution/</a>
      </p>
      
      <p>2.
      <a href="https://www.economist.com/node/21553017" target="_blank">https://www.economist.com/node/21553017</a>
      </p>
      
      <p>3.
      <a href="https://projektintegracija.pravo.hr/_download/repository/Kuhn_Structure_of_Scientific_Revolutions.pdf"
        target="_blank">3. Kuhn, Thomas, The Structure of Scientific Revolutions, </a>
      </p>
      </div>
      
      <div class="mar 18-03 -09" id="18-03-09">
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
      
      <h5 class="subdailytech">Web Dev Affairs</h5>
      
      <p class="author">by Thomas Maestas, MA</p>
      
      <h6 class="chapternumber">March 9th, 2018</h6>
      
      <h6 class="dailytitle chapternumber">&#39;Alexa, can you laugh?&#39;</h6>
      
      <p class="firstparagraph">Alexa has made headlines about reports of unexplained laughter responses
      <sup id="0309-1">1</sup>. Information like this needs a
      <i>
        <strong>fact-check</strong>
      </i> &agrave; la Snopes.com.
      <sup id="0309-2">2</sup> And, whether or not Alexa misheard, &quot;Alexa, laugh&quot;, or not, is less important than the
      <i>socially-intrusive consequences</i> of simple app-development errors. The first issue is simply that programmer
      <strong>logic </strong> and user-interface intuition should be as clear (and generalized) as possible. This is easier said
      than done, for example the recent case of Hawaii&#39;s mistaken
      <i>incoming-ballistic-missile warning system</i>.
      <sup id="0309-3">3</sup> As it turned out, the dropdown-menu design placed the &quot;Send Test Warning&quot; next to &quot;Send Warning&quot;
      in an unintuitive, fail-possible manner. Oops.</p>
      
      <p>While most focus on Alexa et al.&#39;s actions and abilites, in the name of caution, but rather the larger issue
      falls on how much we allow ourselves to mentally depend on tech for things.</p>
      
      <p>1.
      <a href="https://www.buzzfeed.com/venessawong/amazon-alexa-devices-are-laughing-creepy?utm_term=.um6P18a8a#.cgggP2j2j"
        target="_blank">https://www.buzzfeed.com/venessawong/amazon-alexa-devices-are-laughing-creepy?utm_term=.um6P18a8a#.cgggP2j2j</a>
      </p>
      
      <p>2.
      <a href="https://www.snopes.com/fact-check/is-amazons-alexa-emitting-unprompted-creepy-laughing/" target="_blank">https://www.snopes.com/fact-check/is-amazons-alexa-emitting-unprompted-creepy-laughing/</a>
      </p>
      
      <p>3.
      <a href="https://www.washingtonpost.com/news/morning-mix/wp/2018/01/16/that-was-no-wrong-button-in-hawaii-take-a-look/?utm_term=.a2aa65329002"
        target="_blank">https://www.washingtonpost.com/news/morning-mix/wp/2018/01/16/that-was-no-wrong-button-in-hawaii-take-a-look/?utm_term=.a2aa65329002</a>
      </p>
      </div>
      
      <div class="mar 18-03 -12" id="18-03-08">
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
      
      <h5 class="subdailytech">Sociology Tomorrow!</h5>
      
      <p class="author">by Thomas Maestas, MA</p>
      
      <h6 class="chapternumber">March 8, 2018</h6>
      
      <h6 class="dailytitle chapternumber">1.4 Million Reasons for More Women in Tech, Part II
      <br />
      <br /> * Continuation of Women in Tech Theme from
      <a href="#18-02-23">Feb. 23rd Blog</a>
      </h6>
      
      <p class="quote">This is the first time in human history that we have the ability to see enough about ourselves that we can hope to
      actually build social systems that work qualitatively better than the systems we&#39;ve always had.</p>
      
      <p class="quote">--Author unknown</p>
      
      <p class="firstparagraph">My February 23rd Post on women in tech focused on the
      <i>workforce demand</i> for more women in tech positions, however today I&#39;m writing on the
      <strong>
        <i>social need</i> for more female insight within the tech workforce</strong> , given that programming will increasingly
      shape our future institutions. This means that every institution, whether private hospitals, non-profit charity
      foundations, or government bureaus, will effectively restructure (optimize) their own organizational structure in
      an increasingly
      <i>data-driven</i> paradigm. From a Sociology of Organizations perspective, the changes to come are breath-taking to
      consider.</p>
      
      <p>So why women? Where could I start? Better stated, why is a quintessentially important job sector, a sector in desperate
      need for insight, comprised primarily of men?
      <sup id="one">1</sup> The facts are evident: ~15-20% of women comprising tech positions.
      <sup id="two">2</sup> Numbers aside, I argue there is a quintessential societal need for more women in tech: This is because computing
      and understanding data has changed since the data collection from Web 2.0 (mobile), becoming more networked and
      relational.</p>
      
      <p>The challenge for society in this age is historic, and women must absolutely be included in the process of the age:
      Please consider, that in the 1650&#39;s, the invention of the microscope opened a new world of data and
      <i>information</i> about the bacteriological, microscopic surroundings--hitherto blind to all. Likewise, the telescope
      has allowed us as a society to explore the outer universe and earth&#39;s position within it.</p>
      
      <p>Now, the inventions of machine-learning, computing coupled with Big Data analytics, allows us to explore (and manage)
      a universe of knowledge--about
      <i>ourselves</i>, human society--with unfathomably complex, unstructured relational data structures. Accessing the
      data to computer-readable form is one thing, but meaning in data is inaccessible until the
      <i>output</i> can be
      <i>re-</i>programmed into meaningful, human-readable data, i.e. information. This latter stage of development is the
      key challenge--for which success depends on representative female participation in Tech.</p>
      
      <p>Adding to the challenge of finding meaningful trends is the backdrop of noise from spurious variables. This is akin
      to finding a needle in an increasingly complex and growing haystack.</p>
      
      <p class="quote">What&#39;s different now and has changed is it&#39;s no longer about taking this data, putting it into a computer
      running a calculation and getting a balance sheet answer ...</p>
      
      <p class="quote">What&#39;s important now is what is the context of the data, what is it connected to, what effect is it having on
      data around it... It&#39;s basically a network of the data, it&#39;s no longer sort of tabular columns, of rows
      of data, it&#39;s
      <i>interconnected patterns</i>.
      <br /> --Tim Cook</p>
      
      <p>This quote means that as we move away from rule-based, mechanistic data analytics toward more complex, relational
      and networked data, we need an equally complex paradigm to keep up. Excluding the female mind from this challenge
      is not simply a clumsy, myopic mistake. Worse yet, so long as the Tech Industry remains gender lop-sided, Tech will
      increasingly resemble another myopic beast, a cave-dweller named Cyclops.</p>
      
      <p>1.
      <a href="https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html" target="_blank">https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html</a>
      </p>
      
      <p>2.
      <a href="https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages" target="_blank">https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages</a>
      </p>
      
      <p>3.
      <a href="https://www.aauw.org/research/why-so-few/" target="_blank">https://www.aauw.org/research/why-so-few/</a>
      </p>
      </div>
      
      <div class="mar 18-03 -12" id="18-03-07">
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
      
      <h5 class="subdailytech">Web Dev Affairs</h5>
      
      <p class="author">by Thomas Maestas, MA</p>
      
      <h6 class="chapternumber">March 7, 2018</h6>
      
      <h6 class="dailytitle chapternumber">About the April 23 Implementation of the FCC Net Neutrality Laws:
      <br /> The Coming Battle of States&#39; versus Federal Rights Part II</h6>
      
      <p class="firstparagraph">Washington&#39;s assertion of States&#39; Rights yesterday may augur the first of many lawsuits over control over
      bandwidth.</p>
      </div>
      
      <div class="mar 18-03 -12" id="18-03-06">
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
      
      <h5 class="subdailytech">Web Dev Affairs</h5>
      
      <p class="author">by Thomas Maestas, MA</p>
      
      <h6 class="chapternumber">March 6, 2018</h6>
      
      <h6 class="dailytitle chapternumber">April 23 Implementation of the FCC Net Neutrality Laws:
      <br /> The Coming Battle of States&#39; versus Federal Rights</h6>
      
      <p class="firstparagraph">Net Neutrality Rules, potentially one of the more important set of Individual Rights for us as citizens in the tech
      age, will soon undergo the rule changes voted by the Federal Communications Commission (FCC) this past December.
      In a nutshell, the Internet Service Providers (ISP&#39;s), e.g. Comcast, Cox, Verizon are granted the power--as
      a Title I &quot;information service&quot;--to slow down traffic, make fast- &amp; slow-lanes. Of course this is
      bad news for internet-users because even premium users may experience &quot;throttling&quot; if using the ISP&#39;s
      preferred apps. The only stipulation holds that the ISP&#39;s rules are made public. However, 21 states are bringing
      lawsuits to fight these changes, and the first assertion of State Law by Washington State today:</p>
      
      <p class="quote">The FCC is already embroiled in a variety of lawsuits related to its rollback of net neutrality rules, including
      an effort from 21 state attorneys general to get a court to block the FCC&#39;s move.</p>
      
      <p class="quote">&quot;This is symbolic politics, because the states know it is illegal to do,&quot; Roslyn Layton, a visiting scholar
      at the American Enterprise Institute, told NBC News. &quot;But they can put rules on the book and make it look like
      they&#39;re doing something.&quot; The FCC is already embroiled in a variety of lawsuits related to its rollback
      of net neutrality rules, including an effort from 21 state attorneys general to get a court to block the FCC&#39;s
      move.
      <sup>1</sup>
      </p>
      
      <p>S The big question arises over
      <i>who</i> has jurisdiction between the States&#39; and Federal authority; yet one thing is certain, the coming battle
      for protecting citizens&#39; rights will take place over jurisdiction of Internet Bandwidth turf.</p>
      
      <p>
      <a href="https://www.nbcnews.com/tech/tech-news/washington-state-passes-net-neutrality-law-states-push-back-against-n854086"
        target="_blank">https://www.nbcnews.com/tech/tech-news/washington-state-passes-net-neutrality-law-states-push-back-against-n854086</a>
      </p>
      
      <p>&nbsp;</p>
      </div>
      
      
      <div class="mar 18-03 -12" id="18-03-05">
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
      
      <h5 class="subdailytech">Healthy Today!</h5>
      
      <p class="author">by Thomas Maestas, MA</p>
      
      <h6 class="chapternumber">March 5, 2018</h6>
      
      <h6 class="dailytitle chapternumber">A Return to the Question of Guns, Germs, and Steel: Part II and the Germs</h6>
      
      <p class="firstparagraph">Germs present a timely topic for today, given the especially virulent
      <strong>Flu Virus strain</strong>. Many, like me, have wondered why our 1940&#39;s-era
      <sup>1</sup> technology in Flu Vaccine fabrication wouldn&#39;t invite more innovative solutions. Without feigning any
      medical expertise, I have to still ask about the progress made with the ever-mutating--i.e., drifting--Flu virus&#39;
      surface protein &quot;head,&quot; called hemaglutinin. This strategy &quot;guesses right&quot; very effectively,
      and provides an effective solution for most, in most years. Yet this winter has revealed that effectiveness statistics
      are
      <i>not always</i> in our favor.</p>
      
      <p class="quote">For many decades, researchers believed the flu vaccine offered solid protection if it was a good match to the circulating
      strains; studies from the 1940s through the 1960s routinely showed an efficacy of 70% to 90%. But those studies
      relied on a misleading methodology.</p>
      
      <p class="quote">Danuta Skowronski, an epidemiologist at the BC Centre for Disease Control in Vancouver, Canada, instead blames mutations
      in the vaccine strain itself. The most common influenza vaccine contains an &quot;inactivated&quot; virus, which
      manufacturers grow in chicken eggs. As Skowronski&#39;s team first reported in 2014, the virus can mutate while
      it is growing in the eggs, resulting in a vaccine unable to block circulating strains.
      <sup>1</sup>
      </p>
      
      <p>Earlier, I casually mentioned &quot;guessing&quot;, yet with great respect, the science behind estimating the flu
      virus between the time of R &amp; D, fabrication, and the flu
      <i>season</i>. (This antigenic drift, not to be confused with
      <i>Antigenic Shift</i> in which the Flu Virus makes an abrupt change.) I&#39;ll let the CDC abbreviate this:</p>
      
      <p class="quote">One way they change is called &ldquo;antigenic drift.&rdquo; These are small changes in the genes of influenza viruses
      that happen continually over time as the virus replicates. These small genetic changes usually produce viruses that
      are pretty closely related to one another, which can be illustrated by their location close together on a phylogenetic
      tree. Viruses that are closely related to each other usually share the same antigenic properties and an immune system
      exposed to an similar virus will usually recognize it and respond
      <sup>2</sup>.</p>
      
      <p>So, ultimately, the strategy is to estimate the form, location, of that virus--what it will look like--at a particular
      period each year. This implicates a strategy to estimate the trajectory, stage by stage, of this virus, i.e. a longitudinal
      time-series morphology, each year. The article makes this point more precise:</p>
      
      <p class="quote">But these small genetic changes can accumulate over time and result in viruses that are antigenically different (further
      away on the phylogenetic tree). When this happens, the body&rsquo;s immune system may not recognize those viruses.
      <sup>2</sup>
      </p>
      
      <p>Petri dishes aside, let&#39;s focus on the changing nature of the Flu Virus, which makes itself a
      <i>research </i>challenge in itself because of an ever-mutating object of study. Yet, this ever-changing nature also
      provides the very tool Statisticians need most for estimating: Big Data. The Law of Large Numbers means that plain
      math can accurately plot, and in most cases predict with a moderate statistical significance, future events, sort
      of.</p>
      
      <p>Sort of I say because too often we predict that two separate events are more likely to occur, conditional on each
      other, then conditional upon other factors. This being
      <i>correlation</i>, but the Statistician&#39;s Holy Grail is the other kind: Causality. Causality hinges on only thre3e
      things: 1) Association, 2) Time Precedence, and 3) Ruling out any
      <i> effect</i> of spurious variables. (Hang with me, I&#39;m still getting back to the subject of our annual predictions
      about a few months&#39; worth of antigenic drift.)</p>
      
      <p>Therefore, Big data, and new advances in the statistical sciences, and the technology that increasingly defines our
      sciences, may soon refine and supercharge research into the first and third of the three points of causality. The
      first of these, the associations, along the phylogenetic tree, are merely a network at its base, the science of
      which gains computational strength each year. Rare as it is in Academia, in this case Might makes Right!</p>
      
      <p>
      The third tenet of causality, after association and time direction, is ruling out the effect of other factors when separating
      <i>cause</i> and consequence. Advances in managing big data, and statistical analysis of it, means gaining a better
      handle on the multiple effects of
      <sup>spurious </sup>factors, hence analysis optimized by new, network-graph data structure technology. The Law of Large
      Numbers
      <sup>3</sup>, i.e. the sheer number of mutations and other factors, coupled with new
      <strong>technology</strong>, will better inform the morphology of the
      <i>path</i> of the virus, along the phylogenetic tree itself. Who knows where a cure may come from, perhaps a bio-statistician
      out there, churning the numbers, may be the one to stumble upon a better Flu Vaccine!
      
      </p>
      <p>1.
      <a href="http://www.sciencemag.org/news/2017/09/why-flu-vaccines-so-often-fail" target="_blank"> http://www.sciencemag.org/news/2017/09/why-flu-vaccines-so-often-fail </a>
      </p>
      
      <p>2.
      <a href="https://qz.com/1143420/the-2017-2018-flu-vaccine-is-less-effective-than-usual" target="_blank"> https://qz.com/1143420/the-2017-2018-flu-vaccine-is-less-effective-than-usual </a>
      </p>
      
      <p>3.
      <a href="https://www.cdc.gov/flu/about/viruses/change.htm" target="_blank"> https://www.cdc.gov/flu/about/viruses/change.htm </a>
      </p>
      
      <p class="quote">&nbsp;</p>
      </div>
      
      <div class="mar 18-03 -12" id="18-03-03">
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
      
      <h5 class="subdailytech">Sociology Tomorrow!</h5>
      
      <p class="author">by Thomas Maestas, MA</p>
      
      <h6 class="chapternumber">March 3-4, 2018
      <br /> Weekend
      </h6>
      
      <h6 class="dailytitle chapternumber">A Return to the Question of Guns, Germs, and Steel</h6>
      
      <p class="firstparagraph">Back in 1997, a Pulitzer-Prize winning theory--based on Dr. Jared Diamond&#39;s
      <i>Guns, Germs, and Steel: The Fate of Human Societies</i> --provided the recipe book for the success of societies.
      Not without controversy, the theory posits that geographic and environmental preconditions, once met, provide tech
      &amp; resources trading opportunities, within a network of other nation-states also vying for technogical innovation.</p>
      
      <p>A nation&#39;s Technology, in turn, opens the means necessary to expansive, stable, independent sovereignty that
      lasts and thrives. Equally so, the nation&#39;s friends, especially those making the best-friends list, share and
      receive a secondary, &quot;residual&quot; technological bump over the time-course of the network&#39;s future trading,
      i.e. network transactions. So, if our best friends Canada and Mexico are less keen, then there is network reverberation!</p>
      
      <p>Given the advent of a real, lasting Trade-War, I would think that a network theorist wouldn&#39;t be betting on one
      particular node within this network. I say this because a disproportionately asymmetrical flow of technology and
      resources, while simultaneously raising prices on most staple goods, may spell trouble for the Every-Day person.
      So far, Nation-State: 0, People: 0 ... So, who wins with a Trade War? Alas, let&#39;s hope not the resurrection
      of the Neo-Multi-National Corporations, born from NAFTA deals, coincidentally, from the late 1990&#39;s. Bah humbug!</p>
      
      <p>&nbsp;</p>
      
      <p>1.
      <a href="http://www.jareddiamond.org/Jared_Diamond/Guns,_Germs,_and_Steel.html" target="_blank">Guns, Germs, and Steel. &quot;Steel: The Fates of Human Societies.&quot; Diamond J (1997).</a>
      </p>
      </div>
      
      <div class="mar 18-03 -12" id="18-03-02">
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
      
      <h5 class="subdailytech">Web Dev Affairs</h5>
      
      <p class="author">by Thomas Maestas, MA</p>
      
      <h6 class="chapternumber">March 2, 2018</h6>
      
      <h6 class="chapternumber dailytitle">Widening Circles of Mobile-App Security Risks</h6>
      
      <p class="firstparagraph">Security, security, another day another platform risk, or risks from your device, or risks from transactions, Today&#39;s
      headline buried beneath a techy jargon provides a glimpse of the rising threat of web-application-based hackery:
      Cryptojacking.
      <i>Coindesk</i> reports, &quot; Opera browser introduces cryptocurrency miner protection for smartphones ... &quot;</p>
      
      <p class="quote">Cryptocurrency miners can overload smartphones&#39; CPUs, forcing 100 percent usage and potentially causing a phone
      to overheat. And the damage can sometimes be permanent. According to a ZDNet article, one trojan generated so much
      heat in a phone, its battery became swollen, permanently damaging the phone. While excessive ads were one reason
      for the heat generation, the main cause was that the phone&#39;s CPU was hijacked to mine for Monero.
      <sup>1</sup>
      </p>
      
      <p>The larger issue here is that the lines between trusted mobile-app authorities, i.e., certified by Play Store or
      Apple&#39;s is increasingly irrelevent. This is because an increasing number of app-users are ditching device-downloaded
      apps, preferring for browser applications--hence, a much more appetizing market for the newest generation of blackhat
      hackers, online thieves, peeping-toms, and other ill-wishers. There are a few driving factors for this issue--one
      of which is the onset of Decentralized Applications (DAPPs), which use the
      <i>browser</i> to interface between the Every-Day blockchain client/merchant/programmer and the actual byte-code of
      the blockchain (via WEB).</p>
      
      <p>More importantly, the larger issue is that we live in an age in which the exclusive, native browser language since
      1995, i.e. JavaScript. Security issues with browser-based apps were very low, because JavaScript never left the
      browser, ever. Until 2009, Data, Servers were the domain of PHP, JAVA, Python, etc. or some other language for the
      highly sensitive, dirty work of dipping into all that data sitting ontop of centralized servers around the world.
      PHP wasn&#39;t easy, so power and responsibility usually followed with all the extra effort and expertise.</p>
      
      <p>2015 augured in the Node.js server-accessing (can create, read, update, and delete date) new-born capabilities of
      JavaScript</p>
      
      
      <p>1.
      <a href="
      https://www.coindesk.com/opera-browser-introduces-cryptocurrency-miner-protection-for-smartphones/
      " target="_blank"> https://www.coindesk.com/opera-browser-introduces-cryptocurrency-miner-protection-for-smartphones/ </a>
      </p>
      </div>
      
      <div class="mar 18-03 -12" id="18-03-01">
      <hr />
      <button>
      <a href="#martop">Top</a>
      </button>&nbsp;
      <h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
      
      <h5 class="subdailytech">Musing Blockchain</h5>
      
      <p class="author">by Thomas Maestas, MA</p>
      
      <h6 class="chapternumber">March 1, 2018</h6>
      
      <h6 class="chapternumber dailytitle">Blockchain Sustainability Issues and The Double-Edged Sword</h6>
      
      <p class="firstparagraph">I couldn&#39;t help but revisit the
      <strong>Environmental Sustainability</strong> problem I addressed in my February 28th post. This problem, experienced by
      the top two crypto-currencies Bitcoin and Ethereum, is that the
      <i>monetary</i> value of the currency is matched to the
      <i>computing difficulty</i>--measured either by how much the computer is sweating, or by electricity KiloWatt Hours
      per year.
      <sup>1</sup> Digiconomist succinctly writes:</p>
      
      <p class="quote">The continuous block mining cycle incentivizes people all over the world to mine Bitcoin. As mining can provide a
      solid stream of revenue, people are very willing to run power-hungry machines to get a piece of it. Over the years
      this has caused the total energy consumption of the Bitcoin network to grow to epic proportions, as the price of
      the currency reached new highs.
      <sup>2</sup>
      </p>
      
      <p>And, so the issue I&#39;m addressing is a side-effect of the deepening incentivization for miners to invest more
      equipment, and in turn, more electricity. The article goes on to report Bitcoin&#39;s surpassing 50 TeraWatt-Hours-per-year
      usage has surpassed that of Portugal and Singapore, which are 49.5 TWh per year, and 49.8 TWh per year, respectively.
      In other words, the usage by the Bitcoin miner&#39;s cost (in electricity) compared with the miner&#39;s gain (in
      Bitcoins accrued by incentivized mining) drives up and incentives a deeper Carbon Footprint.</p>
      
      
      <p class="quote">Fueled by a meteoric rise in the Bitcoin price over the past few months, the power usage of the Bitcoin network has
      been increasing at a feverish pace. Just a little over three months ago, at the start of November 2017, the Bitcoin
      Energy Consumption Index was estimating the total electricity consumption of the Bitcoin network to be half of the
      current amount. On the first day of November, the estimated consumption was equal to 24.3 TWh per year.
      <sup>1</sup>
      </p>
      
      <p>
      Carbon Footprint, measured in this way, equates as a double-edged sword: The miner&#39;s electricity costs account for approximately
      65% of the profit (Bitcoin units&#39; value, measured when mined). So the
      <i>economic </i>usage means the cheapest available fuel is part of the business model--and it would lead to the cost
      of the cheapest source of energy: Dirty Coal. At the end of the day, if the
      <i>currency&#39;s </i>rising value means that more computationally-intensive mining is more and more profitable, then
      perhaps the other edge looks preferred!
      </p>
      
      <p>1.
      <a href="
      https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal
      " target="_blank"> https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal </a>
      </p>
      
      <p>2.
      <a href="
      https://digiconomist.net/bitcoin-energy-consumption
      " target="_blank"> https://digiconomist.net/bitcoin-energy-consumption </a>
      </p>
      
      </div>
      
      <hr /><a href="#martop">
      <button id="end">TOP</button>
      </a>
              `;

  } else {

    secretParagraphMAR.style.display = 'none';

  }

};




/* 
import App from './components/app';  
import popper from './popper';
import february from "../data/february"; 

const data = {
	type:"line",
	//data:formatedData,
	data:a2c(rawData),
	options:{
responsive: true,
        text:"Average Polllution in Three Cities",
		title:{
	display:true,
            text:"Average Temperature: Austin, San Francisco, New York"
        },
		hover:{
	mode:'label'
		},
		tooltips:{
	mode:'label' //single
		}
	}
};


var blogs = [
  {posts: 'February'},
  {posts: 'March'}

];
$.each(blogs, function(key, value){
  $('.blogs').append('<h2>'+value.posts+'</h2>');
  console.log(blogs.posts);
  
});
console.log(blogs.posts);


console.log('dom-loader'); 
var metaBlog = {
    "dailytitle":"The Sharing Economy Hand-in-Hand with the Market Economy, Part II: Internet of Things",
    "chapternumber":"March 12, 2018",
    "weekend":false,
    "divs": ['18-03-10',
    '18-03-10',
    '18-03-11',
    '18-03-12',
    '18-03-13',
    '18-03-14',
    '18-03-15',
    '18-03-16',
    '18-03-17',
    '18-03-18',
    '18-03-19', 
    '18-03-20',
    '18-03-21',
    '18-03-22', 
    '18-03-23',
    '18-03-24',
    '18-03-25',
    '18-03-26',
    '18-03-27',
    '18-03-28',
    '18-03-29',
    '18-03-30'   
    ]
};
  */


// ReactDom.render(<App />, document.getElementById('react'))
