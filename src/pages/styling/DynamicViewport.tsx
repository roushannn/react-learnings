import DvhImage from '../assets/styling_vh_vs_dvh.png';
import SvhImage from '../assets/styling_svh_vs_lvh.png';

import './DynamicViewport.scss';

export const DynamicViewport = () => {
    return (
        <div className={'content'}>
            <h1>Dynamic Viewport Height</h1>
            <p>
                While working on my current project, I received a request from the
                client saying the masthead is too tall which ended up covering the
                content when user is viewing the pages on smaller screen sizes.
                This is an important concern as it affects accessibility for all
                users so we got to work on it immediately (meaning adding the ticket
                to the next sprint :x)! <br/>
                <br/>
                So I changed the height of the masthead component from 2/3 of the
                screen height to 50% of viewport height:
                <br/>
                <code>height: 50vh</code>
                <br/>
                However, when I did this change and checked it on my localhost on
                both mobile view, it didn't exactly look like 50% of the
                screen height ... It looked more like 60% of it or more but definitely
                not half of the screen. So I decided to investigate more into this issue,
                and by that I meant consulting with the know-it-all, Google.
                <br/>
                <br />
                And alas, I came across an article about <i>dynamic viewport height. </i>
                After reading the article, I had a much better understanding on why
                the masthead was not appearing as I had thought it should. This issue may
                be more apparent on mobile devices' browsers with dynamic toolbars. For
                regular viewport height, <code>100vh</code> would meant from the bottom of
                the top toolbar to the bottom of the screen while a dynamic viewport height
                at <code>100dvh</code> would mean the height of the content viewable not
                being blocked by the top and bottom toolbars as depicted in the image below.
                <br /><img src={DvhImage} alt={"vh vs dvh"}/><br/>
                So I immediately went to try it out and indeed, the masthead image now appears
                smaller than when i used <code>50vh</code>. I thought my problem was fixed ...
                As some background information, the masthead has parallax effect which meant
                the image zooms as the page is being scrolled. To my horror, as I scrolled
                down the page, the masthead jumped and the parallax effect made it more apparent.
                <br />
                I found that this is due to the toolbar minimizing as the user scrolls down on
                the browser and since I'm using dynamic viewport height units, the height changes
                as the user scrolls. Hence, causing this jumping effect. So, I decided to explore
                the other viewport units.
                <br />
                <br />
                There are several viewport height units available to use:
                <ul>
                    <li>DVH: Dynamic Viewport Height</li>
                    <li>SVH: Small Viewport Height</li>
                    <li>LVH: Large Viewport Height</li>
                    <li>VH: Viewport Height</li>
                </ul>
                These are also true for viewport width! <br/>
                With <code>svh</code>, it refers to the bottom of top toolbar to the top of
                the bottom toolbar while <code>lvh</code> refers to the top of the top toolbar
                to the bottom of the bottom toolbar.
                <br /><img src={SvhImage} alt={"svh vs lvh"}/><br />
                With this newfound understanding, I decided to go with <code>svh</code> and
                indeed, the jumping bug effect no longer exists and the client is also satisfied
                with this height improvement!
                <br />
                <br />
                Thanks for listening to me Ted Talk ~
            </p>
        </div>
    )
}