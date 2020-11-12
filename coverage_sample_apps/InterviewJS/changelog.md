## 28-03-2018

* composer: help tour in the dashboard
* composer: new interviewee will now be added as the last and not the first
* composer: fixed color picker in IntervieweeForm.js
* composer: it is no longer publish a story without a poll
* viewer: opening chat with another person with history loads immediately without animation
* viewer: poll choices are now being stored in localstorage, readers are no longer able to re-submit poll
* viewer: story consumption score is now dynamic

## 25-03-2018

* composer: embed/map/youtube tabs now have input validation
* composer: fixed a bug allowing to create stories without interviewees which would crash the app
* composer: history is now initiated correctly no matter who’s the starting character of a chat
* composer: skip/continue user choices are now reflected in the story flow
* composer: user panel redesigned
* viewer: bug fixes
* viewer: chat history is now being saved and replayed per each interviewee
* viewer: chat with a person now ends with `xyz left the chat`
* viewer: fixed onBubbleRender logic bubbling up
* viewer: it is now possible to chat to another character via ‘i want to chat to somebody else'
* viewer: the reader can now respond with one of the scripted chat options
* viewer: the user can now respond with emojis
* viewer: user gets to either chat to somebody else or quit chatting at end of a chat

## 16-03-2018

* It is now possible to add image bubbles to your story.
* File-typed inputs now only accept images with a subset of file extensions.
* Viewer is almost production ready.
* About InterviewJS modal in the Composer.

## 09-03-2018

* It is now possible to add embed, map, media bubbles — WIP
  Textareas in those tabs accept `<iframe…>`-like code. Example: https://twitter.com/interview_js/status/971948278089637888

* It is now possible to add `link` bubbles.
  The left-side tab now features a simple form asking for a URL and display link. If no display link provided, link URL will be used as link label.

* It is possible to delete bubbles.
  Hover over them in the storyline pane—an `x` will appear on the sides.

* It is now possible to re-order bubbles in the Composer
  Drag an already existing bubble within the Storyline canvas like this: https://twitter.com/interview_js/status/971755705719025666

* Meta form updated to feature explicit labels for Cover/Logo file fields as per Haddad’s request.

* Integrated `explore` action dictionaries for all interviewee bubble types (text, image, embed, ecc.)

* Tweaked UserPane logic to allow input placeholder different from value.
  So now we have `Type custom label here…` and not `Ignore` value at all times.

## 06-03-2018

* Firefox fixes
  Composer has been browser tested—Chrome, Safari, Firefox is good to go.

* Account menu is now a dropdown.
  In the Listing, top left Account details are now a dropdown so they display better on mobile.

* There’s now a Publish Flow starting in the Composer
  `Publish` button in the Composer launches a wizard asking to: 1) review meta 2) review intro/context 3) create outro poll/questionnaire 4) display public link to the story (no. 4 is still WIP).

* Composer storyline (central pane) can now accommodate user actionable bubbles
  They differ from regular string bubbles (like interviewee’s bubbles) as they need to carry more information (wether they’re skip/explore, custom text label if set, ecc.).

* It is now possible to add user bubbles
  Both explore/ignore are selectable, one can customise their text labels or select from a library of predefined bubbles.

* Editing preview value in the Interviewee Panel now propagates changes to the added text bubble
  Select a piece of text from the transcript, edit it in the preview and add the bubble — you’ll notice how the bubble will feature the edited text.

* Composer Scroll-to-bottom
  Composer storyline (central pane) will now scroll to bottom automatically on page load or addition of a new bubble.

## 02-03-2018

* It is now possible to delete interviewees.
  You can do so in the modal dialog when editing a single interviewee. Bottom-right: there’s a red icon, it has a tooltip (on hover) and a dropdown (on click) asking to confirm deletion. Extra logic has been put in place to prevent removal of the only interviewee in a story.

* Simple auth flow.
  Added a simple Google sign-in screen ( http://interviewjs.io/my/ ) and a `sign out` CTA in the listing (next to the avatar).

* Extended bubble styles to support 'typing’ animation.
  You can see the result of that in the above link, where bubbles animate.

* Documented Animator wrappers.
  Above animations is just a subset of the possible treatments. We may not have time to add more, but there will be a space for open-source community to reference them: http://styleguide.interviewjs.io/#/animators

* Integrated icons throughout.
  All icons are now documented here: http://styleguide.interviewjs.io/#/icons and used throughout Composer. You’ll see them for example here: http://interviewjs.io/my/stories/0bf34b30-743b-46ab-weewe-c875326d86f6

* Composer now accepts transcript text
  In the Composer it is now possible to paste or type in transcript. That transcript is now being save per each interviewee separately (notice here: http://interviewjs.io/my/stories/0bf34b30-743b-46ab-weewe-c875326d86f6 how switching between interviewees displays different transcript). Any change to the transcript is being saved onBlur (when taking the focus from the textarea).

* It is now possible to select piece of a transcript
  The textarea holding the transcript has onSelect event hooked up, selecting text will automatically display it below in the grey bubble preview box. Note how you can edit text in that grey bubble box too — though those changes won’t be save just yet (WIP).

* It is now possible to add bubbles to the story.
  Only text bubbles for now, and it’s WIP—plenty to do there, but the + buttons turns green when the bubble preview grey area is populated with some data.

## 22-02-2018

* integrated simple speech bubble groups in the storyline pane with react-stay-scrolled
* stories dataset has been remodelled, added a simple chat `Meeting Ava` to test this dataset model against display logic
* interviewees switch features a direct link to interviewees’s tab in story details modal (the button next to the avatar)
* composer has now interviewees switch that toggles between interviewees’ storylines (avatars in the top center below the title)
* composer’s interviewee panel’s (left) has now tabs setup for all different speech bubble types
* forms have now field validation where necessary (i.e. prevents the user from saving a story without a title, ecc.)
* managing story details (meta, intro, interviewees, style) has been merged into a single modal dialog with tabs
* if listing is empty, there is now a CTA to create a new story
* there is now a `welcome` screen with a brief intro as per prototype, it appears only on first visit
* new story flow is now finalised, last step redirects to the composer
* it is now possible to add and edit interviewees both in the `create story` flow as well as listing and the composer itself
* new stories are assigned formatted creation date automatically
* story delete confirmation modal
