import { useEffect, useState } from 'react';

const navItems = [
  { href: '#top', target: 'top', label: 'Overview', number: '—' },
  { href: '#s1', target: 's1', label: 'Onboarding', number: '01' },
  { href: '#s2', target: 's2', label: 'WebView vs native', number: '02' },
  { href: '#s3', target: 's3', label: 'News UK 10 years', number: '03' },
  { href: '#s4', target: 's4', label: 'Server-side knowledge', number: '04' },
  { href: '#s5', target: 's5', label: 'Tealium', number: '05' },
  { href: '#s6', target: 's6', label: 'Server-side migration', number: '06' },
  { href: '#s7', target: 's7', label: 'Testing & devices', number: '07' },
  { href: '#s8', target: 's8', label: 'BigQuery', number: '08' },
  { href: '#s9', target: 's9', label: 'MCP + GTM', number: '09' },
  { href: '#s10', target: 's10', label: 'Event tracking', number: '10' },
];

const overviewItems = [
  { id: 's1', title: 'Onboarding task' },
  { id: 's2', title: 'WebView, in-app browser & native detection' },
  { id: 's3', title: 'News UK 10-year anniversary' },
  { id: 's4', title: 'Server-side knowledge' },
  { id: 's5', title: 'Tealium implementation' },
  { id: 's6', title: 'Tealium → server-side GTM migration' },
  { id: 's7', title: 'Testing across BrowserStack & Charles' },
  { id: 's8', title: 'Exploring GCP & BigQuery' },
  { id: 's9', title: 'Learning MCP server' },
  { id: 's10', title: 'Critical Production bug: event tracking' },
];

function App() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('main section[id]');
      let current = 'top';
      const offset = window.innerWidth <= 900 ? 90 : 120;

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - offset) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="shell">
      <nav className="nav" id="sidenav">
        <div className="nav-brand">
          6-Month Review
          <span>Cross-platform engineering</span>
        </div>

        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.target}>
              <a
                href={item.href}
                className={`nav-link ${activeSection === item.target ? 'active' : ''}`}
                data-target={item.target}
              >
                <span className="nav-num">{item.number}</span>
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav-divider" aria-hidden="true" />
          <li>
            <a href="#closing" className={`nav-link ${activeSection === 'closing' ? 'active' : ''}`} data-target="closing">
              <span className="nav-num">—</span>
              Looking ahead
            </a>
          </li>
        </ul>
      </nav>

      <main>
        <section className="hero" id="top">
          <div className="eyebrow">Six-month experience review</div>
          <p className="lede">
            A record of the projects, technical learning and deliverables completed
            across WebView, native and browser surfaces over the past six months.
          </p>
          <div className="hero-meta">
            <span>Onboarding → forward planning</span>
            <span>10 areas of contribution</span>
            <span>WebView · Native · Server-side</span>
          </div>

          <div className="author-row">
            <div className="social-links">
              <a href="https://github.com/msgtopadmaja" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.8 1.31 3.48.99.11-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.42 11.42 0 0 1 6.01 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.61-5.48 5.91.43.37.81 1.1.81 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/padmajasrinivasan/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.73h2.88v8.77H5.5V9.73Zm4.74 0h2.76v1.2h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.43 1.9 3.43 4.38v4.67h-2.88v-4.37c0-1.04-.02-2.38-1.45-2.38-1.46 0-1.68 1.14-1.68 2.31v4.44h-2.94V9.73Z" />
                </svg>
              </a>
            </div>
            <div className="author-text">
              <span className="author-name">Padmaja S</span>
              <span className="author-role">Analytics Implementation Engineer</span>
            </div>
          </div>

          <div className="hero-diagram">
            <div className="platform-row">
              <div className="platform-card">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="3" y="3" width="30" height="30" rx="3" stroke="#1F6F78" strokeWidth="1.6" />
                  <rect x="7" y="8" width="22" height="14" rx="1" stroke="#1F6F78" strokeWidth="1.4" />
                  <line x1="7" y1="26" x2="29" y2="26" stroke="#1F6F78" strokeWidth="1.4" />
                </svg>
                <h4>WebView</h4>
                <p>
                  In-app rendered web content that must behave consistently with native
                  styling and navigation.
                </p>
              </div>

              <div className="platform-card">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="6" y="3" width="24" height="30" rx="3" stroke="#1F6F78" strokeWidth="1.6" />
                  <circle cx="18" cy="28" r="1.6" fill="#1F6F78" />
                  <line x1="10" y1="9" x2="26" y2="9" stroke="#1F6F78" strokeWidth="1.4" />
                </svg>
                <h4>In-app browser</h4>
                <p>
                  Browser tabs opened inside the app shell, with their own quirks around
                  sessions, cookies and rendering.
                </p>
              </div>

              <div className="platform-card">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="4" y="6" width="28" height="24" rx="3" stroke="#1F6F78" strokeWidth="1.6" />
                  <line x1="10" y1="12" x2="22" y2="12" stroke="#1F6F78" strokeWidth="1.4" />
                  <line x1="10" y1="17" x2="26" y2="17" stroke="#1F6F78" strokeWidth="1.4" />
                  <line x1="10" y1="22" x2="18" y2="22" stroke="#1F6F78" strokeWidth="1.4" />
                </svg>
                <h4>Native screen</h4>
                <p>
                  Fully native UI, sharing app context but with a completely different
                  capability surface.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="alt" id="overview-section">
          <div className="eyebrow">Key areas of contribution</div>
          <h2>Nine projects, one six-month arc</h2>
          <p className="lede">
            From initial onboarding through to forward planning — the work below traces
            roughly in the order it happened.
          </p>

          <div className="overview-grid">
            {overviewItems.map((item) => (
              <a className="overview-item" href={`#${item.id}`} key={item.id}>
                <span className="n">{item.id.replace('s', '').padStart(2, '0')}</span>
                <h4>{item.title}</h4>
              </a>
            ))}
          </div>
        </section>

        <section id="s1">
          <div className="proj-head">
            <div className="proj-num">01</div>
            <div>
              <div className="eyebrow kicker">Onboarding</div>
              <h2>Getting set up and building the foundations</h2>
            </div>
          </div>

          <div className="point-list body-max">
            <div className="point">
              <span className="dot" />
              <p>Completed laptop collection and initial setup to get the required development environment ready.</p>
            </div>
            <div className="point">
              <span className="dot" />
              <p>Completed assigned onboarding courses and training tasks during the initial onboarding period.</p>
            </div>
            <div className="point">
              <span className="dot" />
              <p>Introduced myself to the team and built an understanding of the team's workflows, responsibilities and ways of working.</p>
            </div>
            <div className="point">
              <span className="dot" />
              <p>Requested and obtained the required Tealium access to begin working with the platform, and started learning its implementation approach.</p>
            </div>
          </div>

          <div className="why-block">
            <h5>Why it matters</h5>
            <p>
              Established the foundation for project readiness by completing onboarding
              activities, getting the required access, connecting with the team, and
              starting Tealium learning.
            </p>
          </div>
        </section>

        <section className="alt" id="s2">
          <div className="proj-head">
            <div className="proj-num">02</div>
            <div>
              <div className="eyebrow kicker">Main task</div>
              <h2>Reliably telling WebView, in-app browser and native apart</h2>
            </div>
          </div>

          <p className="lede body-max">The core engineering challenge tackled across the six months.</p>

          <div className="problem-strip">
            <span className="tag">The problem</span>
            <p>
              Inconsistent (d1, d2, d3) parameter behaviour across WebView, in-app
              browser and native screen made tracking issues difficult to reproduce and
              identify.
            </p>
          </div>

          <div className="why-block" style={{ marginTop: '32px' }}>
            <h4>How to identify WebView, in-app browser and native screens</h4>
            <p className="webview-journey"><strong>Journey to Identifying the WebView Screen:</strong></p>
            <ol className="webview-clues">
              <li>
                <strong>Long-pressing text:</strong>
                <span>Press and hold on a paragraph of text. In a WebView, long-pressing often displays standard web browser text-selection handles. In some cases, it may also highlight an entire HTML <code>&lt;div&gt;</code> block.</span>
              </li>
              <li>
                <strong>Long-pressing images:</strong>
                <span>When you press and hold an image, if a menu appears with options such as <strong>“Save Image,” “Copy Image,”</strong> or <strong>“Open Image in New Tab,”</strong> similar to what you would see on a website, it is likely that you are interacting with a WebView.</span>
              </li>
              <li>
                <strong>Link highlighting:</strong>
                <span>When you tap a link or button, if you see a brief translucent grey or blue highlight over the element, which is commonly associated with the default web CSS tap-highlight behavior, it is a strong indication that the screen is rendered using a WebView.</span>
              </li>
            </ol>
            <p className="webview-note">However, this approach created some confusion when testing across <strong>Android and iOS</strong>. The above method worked well for Android, but it was not reliable on iOS.</p>
            <p className="webview-journey"><strong>Identify the WebView screen for Android Device</strong></p>
            <p><strong>Android Studio approach:</strong> I then explored an approach using <strong>Android Studio</strong>. By inspecting the elements through the native code hierarchy, I was able to clearly differentiate between <strong>WebView and native screens</strong>.</p>
            <p>This approach provided a more reliable way to identify whether a particular screen was rendered using a <strong>WebView or native UI component</strong>, especially on Android.</p>
            <div className="video-wrap" style={{ marginTop: '28px' }}>
              <video controls playsInline preload="metadata" src="/sun.mov" />
            </div>
            <p className="webview-journey"><strong>Identify the WebView screen for iOS Device using Safari Web Inspector</strong></p>
            <p>The Android analysis was performed using Android Studio, which allowed us to distinguish between native screens and WebView screens. However, I could not validate the same behavior on iOS using Android Studio due to platform restrictions. To investigate the iOS application, I used Safari Web Inspector to identify whether a screen was native or rendered in a WebView. The inspection showed that the Home screen is native; however, when an article is selected from the Home screen, the Article Details page is rendered in a WebView. By inspecting the elements through the native code hierarchy, I was able to clearly differentiate between WebView and native screens.</p>
            <div className="video-wrap" style={{ marginTop: '28px' }}>
              <video controls playsInline preload="metadata" src="/ioswebview.mov" />
            </div>
            <p className="webview-journey"><strong>Identify the in-app browser screen:</strong></p>
            <div className="inapp-browser-list">
              <div className="inapp-browser-item">
                <strong>The URL Bar &amp; Padlock:</strong>
                <span>If the screen slides up and has a fixed URL bar at the top with a security padlock (even if the URL is read-only), it is an In-App Browser (Safari View Controller on iOS or Chrome Custom Tabs on Android).</span>
              </div>
              <div className="inapp-browser-item">
                <strong>The "Done" or "X" Button:</strong>
                <span>There will always be a native button to close the browser overlay and return to the underlying app.</span>
              </div>
              <div className="inapp-browser-item">
                <strong>The Menu Options:</strong>
                <span>If you see a bottom or top navigation bar with options like "Open in Safari/Chrome," "Copy Link," or native sharing arrows, you are looking at an In-App Browser.</span>
              </div>
            </div>
          </div>



          <div className="three-col" style={{ marginTop: '48px' }}>
            <div className="col-card">
              <span className="tag">Tool 01</span>
              <h5>Android Studio</h5>
              <p>
                Inspected the Android WebView layer directly, confirming user-agent,
                viewport and JS bridge behaviour on-device.
              </p>
            </div>

            <div className="col-card">
              <span className="tag">Tool 02</span>
              <h5>Web Inspector</h5>
              <p>
                Used Chrome's remote inspector to compare DOM and console output between
                WebView and full browser contexts.
              </p>
            </div>

            <div className="col-card">
              <span className="tag">Tool 03</span>
              <h5>Safari Inspector</h5>
              <p>
                Attached Safari's Web Inspector to iOS WKWebView sessions to verify parity
                with the in-app browser on iOS.
              </p>
            </div>
          </div>

          <div className="why-block">
            <h5>Outcome</h5>
            <ul>
              <li>
                Identified a reliable method to distinguish WebView, in-app browser and
                native screen environments, enabling environment-specific tracking logic.
              </li>
            </ul>
          </div>
        </section>

        <section className="milestone" id="s3">
          <div className="proj-head">
            <div className="proj-num">03</div>
            <div>
              <div className="eyebrow kicker">Milestone</div>
              <h2>News Corp's 10-year anniversary</h2>
            </div>
          </div>

          <p className="lede body-max">
            An evening of celebration, great food, music and memorable moments with the
            team — marking a landmark anniversary that required reliable, high-traffic
            delivery across every reader-facing platform.
          </p>

          <div className="milestone-year">
            10<span>years of News Corp</span>
          </div>

          <div className="milestone-points">
            <p>Celebrated News Corp's 10-year milestone with the team and colleagues.</p>
            <p>Enjoyed a great evening filled with delicious food, laughter and fun moments.</p>
            <p>Wrapped up the night with music, dancing and a fantastic DJ — a memorable evening with the team.</p>
          </div>
        </section>

        <section id="s4">
          <div className="proj-head">
            <div className="proj-num">04</div>
            <div>
              <div className="eyebrow kicker">Server-side</div>
              <h2>Building server-side tracking knowledge</h2>
            </div>
          </div>

          <p className="lede body-max">
            Built an understanding of the server-side layer of tracking and analytics to
            ensure robust data collection.
          </p>

          <div className="three-col">
            <div className="col-card">
              <span className="tag">Container</span>
              <h5>GTM server container</h5>
              <p>
                Learned how to provision, configure and manage the server container
                environment within Google Tag Manager.
              </p>
            </div>

            <div className="col-card">
              <span className="tag">Routing</span>
              <h5>Client-to-server flow</h5>
              <p>
                Engineered and routed data requests securely from the client-side web
                browser directly to the server environment.
              </p>
            </div>

            <div className="col-card">
              <span className="tag">Rollout</span>
              <h5>Scottish Sun implementation</h5>
              <p>
                Applied this server-side tracking architecture during the complex rollout
                for the Scottish Sun website.
              </p>
            </div>
          </div>

          <div className="why-block">
            <h5>End-to-end validation</h5>
            <ul>
              <li>
                Performed comprehensive end-to-end validation of tracking tags on the
                staging site to verify accurate data flow and firing behaviour.
              </li>
            </ul>
          </div>
        </section>

        <section className="alt" id="s5">
          <div className="proj-head">
            <div className="proj-num">05</div>
            <div>
              <div className="eyebrow kicker">Analytics tagging</div>
              <h2>Tealium as the tag management layer</h2>
            </div>
          </div>

          <p className="lede body-max">
            Worked with Tealium as the tag management layer powering analytics and
            marketing tracking.
          </p>

          <div className="flow">
            <div className="flow-step">
              <span className="num">1</span>
              <p>Event fires in app</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <span className="num">2</span>
              <p>Tealium captures it</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <span className="num">3</span>
              <p>Tags route data to vendors</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <span className="num">4</span>
              <p>Verified in debug console</p>
            </div>
          </div>

          <div className="why-block">
            <h5>Key contributions</h5>
            <ul>
              <li>Cross-checked tag firing consistency across WebView, native and in-app browser contexts.</li>
              <li>Used Tealium's debug tools to confirm data was reaching analytics platforms correctly.</li>
            </ul>
          </div>
        </section>

        <section id="s6">
          <div className="proj-head">
            <div className="proj-num">06</div>
            <div>
              <div className="eyebrow kicker">Migration project</div>
              <h2>Scottish Sun: Tealium to server-side GTM</h2>
            </div>
          </div>

          <p className="lede body-max">
            Completed the migration of the Scottish Sun's Tealium web profile to
            server-side GTM.
          </p>

          <div className="before-after">
            <div className="ba-card">
              <span className="tag">Before</span>
              <h5>Tealium web profile</h5>
              <p>
                Tags managed and fired through the Scottish Sun's existing Tealium web
                profile, client-side.
              </p>
            </div>
            <div className="ba-arrow">→</div>
            <div className="ba-card after">
              <span className="tag">After</span>
              <h5>Server-side GTM</h5>
              <p>
                Tag logic moved to a server-side GTM container, processing events before
                they reach vendors.
              </p>
            </div>
          </div>

          <div className="why-block">
            <h5>Key learnings</h5>
            <ul>
              <li>
                Gained hands-on experience with server-side GTM architecture, including
                how client-side events are routed through a server-side container.
              </li>
              <li>
                Learned how to migrate existing Tealium web-profile tracking logic into a
                server-side GTM implementation while maintaining the required tracking
                behaviour.
              </li>
              <li>
                Built understanding of server-side event processing, including how data is
                transformed and forwarded to third-party vendors.
              </li>
            </ul>
          </div>
        </section>

        <section className="alt" id="s7">
          <div className="proj-head">
            <div className="proj-num">07</div>
            <div>
              <div className="eyebrow kicker">Quality & testing</div>
              <h2>Testing across devices and traffic</h2>
            </div>
          </div>

          <p className="lede body-max">Used dedicated tooling to test across real devices and inspect network traffic.</p>

          <div className="three-col" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="col-card">
              <span className="tag">Real-device & browser coverage</span>
              <h5>BrowserStack</h5>
              <p>
                Tested across real Android and iOS devices without a physical device lab.
                Verified WebView and in-app browser rendering across OS versions, catching
                device-specific layout and behaviour bugs pre-release.
              </p>
            </div>

            <div className="col-card">
              <span className="tag">Network traffic inspection</span>
              <h5>Charles Proxy</h5>
              <p>
                Inspected requests and responses between app and server. Diagnosed issues by
                comparing traffic across WebView vs native calls, using breakpoints and mock
                responses to test edge cases.
              </p>
            </div>
          </div>
        </section>

        <section id="s8">
          <div className="proj-head">
            <div className="proj-num">08</div>
            <div>
              <div className="eyebrow kicker">Data exploration</div>
              <h2>Getting hands-on with BigQuery</h2>
            </div>
          </div>

          <p className="lede body-max">Queried application data using BigQuery and picked up SQL along the way.</p>

          <div className="point-list body-max">
            <div className="point">
              <span className="dot" />
              <p>Queried data directly using BigQuery.</p>
            </div>
            <div className="point">
              <span className="dot" />
              <p>Learned and practised writing SQL commands to pull the data needed.</p>
            </div>
            <div className="point">
              <span className="dot" />
              <p>Used core SQL clauses — SELECT, WHERE, GROUP BY, JOIN — to shape queries.</p>
            </div>
            <div className="point">
              <span className="dot" />
              <p>Reviewed query results to understand the underlying data structure.</p>
            </div>
          </div>
        </section>

        <section className="alt" id="s9">
          <div className="proj-head">
            <div className="proj-num">09</div>
            <div>
              <div className="eyebrow kicker">Forward planning</div>
              <h2>Learning MCP server</h2>
            </div>
          </div>

          <p className="lede body-max">Early-stage learning and requirements gathering for connecting an MCP server with GTM.</p>

          <div className="point-list body-max">
            <div className="point">
              <span className="dot" />
              <p>Currently learning how MCP servers work and how they could connect with GTM.</p>
            </div>
            <div className="point">
              <span className="dot" />
              <p>Gathered initial requirements for the integration.</p>
            </div>
            <div className="point">
              <span className="dot" />
              <p>Once up to speed on MCP, planning to move into implementing the integration with GTM.</p>
            </div>
          </div>

          <div className="why-block">
            <h5>Status</h5>
            <p>Learning and requirements-gathering stage — implementation to follow once MCP knowledge is solid.</p>
          </div>
        </section>

        <section id="s10">
          <div className="proj-head">
            <div className="proj-num">10</div>
            <div>
              <div className="eyebrow kicker">Critical bug resolution</div>
              <h2>Event tracking — duplicate events & undefined CPN</h2>
            </div>
          </div>

          <p className="lede body-max">Investigated duplicate Omnibug events and a missing customer id dimension on registration events.</p>

          <div className="point-list body-max">
            <div className="point">
              <span className="dot" />
              <p>
                Duplicate Omnibug events: reports showed the registration event firing twice in production. Investigation revealed two separate GA4 properties were present, so dual requests were expected and stakeholders were informed.
              </p>
            </div>

            <div className="point">
              <span className="dot" />
              <p>
                Undefined CPN value: the `registration_complete: google_one_tap` event recorded `not set` for the `up.customer_id` dimension.
              </p>
            </div>

            <div className="point">
              <span className="dot" />
              <p>
                Root cause: a frontend race condition where the tracking event triggered before the cookie containing the customer id was set. Adjusted the firing order to ensure the cookie is present before emitting the event.
              </p>
            </div>
          </div>

          <div className="why-block">
            <h5>Outcome</h5>
            <ul>
              <li>Cleared stakeholder confusion by clarifying expected dual requests to two GA4 properties.</li>
              <li>Fixed the race condition so `up.customer_id` is populated for the `registration_complete` event.</li>
              <li>Improved reliability of analytics by ensuring events fire after required client state is available.</li>
            </ul>
          </div>
        </section>

        <section className="closing" id="closing">
          <div className="eyebrow">Looking back, looking ahead</div>
          <h2>Six months of cross-platform engineering, tooling and infrastructure groundwork</h2>

          <div className="summary-list">
            <div className="point">
              <span className="dot" />
              <p>Found the root cause of a real cross-platform detection problem, with a repeatable, tool-backed method.</p>
            </div>
            <div className="point">
              <span className="dot" />
              <p>Contributed to a major company milestone — the News UK 10-year anniversary.</p>
            </div>
            <div className="point">
              <span className="dot" />
              <p>Built server-side, analytics (Tealium) and BigQuery knowledge from the ground up.</p>
            </div>
            <div className="point">
              <span className="dot" />
              <p>Strengthened QA rigor using BrowserStack and Charles.</p>
            </div>
            <div className="point">
              <span className="dot" />
              <p>Laid the planning groundwork for MCP server ↔ GTM integration.</p>
            </div>
          </div>

          <div className="thanks">
            <h2>Thank you</h2>
            <p>6-Month Experience Review</p>
          </div>
        </section>

        <footer>6-month experience review — cross-platform mobile engineering</footer>
      </main>
    </div>
  );
}

export default App;
