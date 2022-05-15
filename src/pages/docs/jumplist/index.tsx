import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import { Heading } from '@components/Heading';
import { StyledList } from '@components/StyledList';

const JumplistDoc = () => {
  return (
    <Fragment>
      <h1>
        Jumplist
      </h1>
      <p>
        {'The jumplist package provides a way to track DOM elements as they pass through the viewport. This can be especially useful for pages with lengthy content, allowing you to style active and inactive menu items as the page is scrolled. When a menu item is clicked, this package relies entirely on native browser behavior and APIs to scroll to the corresponding item within the page.'}
      </p>
      <p>
        Some common uses for this package include:
      </p>
      <Margin bottom="xs">
        <StyledList
          items={[
            (
              <div key={0}>
                Table of contents
              </div>
            ),
            (
              <div key={1}>
                Jumplist menus
              </div>
            ),
            (
              <div key={2}>
                Dot navigation
              </div>
            )
          ]}
        />
      </Margin>
      <Margin bottom="xs">
        <Heading
          id="how-it-works"
          href="/docs/jumplist#how-it-works"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist#how-it-works`}
          element='h5'
        >
          How it works
        </Heading>
        <p>
          {'The jumplist is a lightweight, component-centric wrapper around the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
            underline
          >
            Intersection Observer API
          </Hyperlink>
          {' — so props mirror this API very closely. Global '}
          <Hyperlink
            underline
            href="/docs/jumplist/api#provider-props"
          >
            jumplist settings
          </Hyperlink>
          {', like '}
          <InlineCode>
            threshold
          </InlineCode>
          {' and '}
          <InlineCode>
            rootMargin
          </InlineCode>
          {', are defined at the top-level of your wrap on the '}
          <InlineCode>
            {'<JumplistProvider>'}
          </InlineCode>
          {'. This provides the '}
          <Hyperlink
            href="/docs/jumplist/api#context"
            underline
          >
            jumplist context
          </Hyperlink>
          {' for all the components and hooks to work together.'}
        </p>
        <p>
          {'As each '}
          <InlineCode>
            {'<JumplistNode>'}
          </InlineCode>
          {' traverses in and out of the viewport, its intersection status is reported to the jumplist provider. With the '}
          <InlineCode>
            useJumplist
          </InlineCode>
          {' hook you can access the '}
          <InlineCode>
            isIntersecting
          </InlineCode>
          {' property of each jumplist node. Other properties in the context like '}
          <InlineCode>
            currentJumplistIndex
          </InlineCode>
          {' and '}
          <InlineCode>
            activeJumplistIndex
          </InlineCode>
          {' are also helpful when multiple nodes, or none, are in the viewport.'}
        </p>
        <p>
          {'There are two ways to scroll to a jumplist node, both rely entirely on native browser behavior. By adding a hash to the URL that matches the id of an element in the document, the browser will automatically scroll to that element. Then the CSS '}
          <InlineCode>
            scroll-behavior
          </InlineCode>
          {' property can be used to easily achieve '}
          <Hyperlink
            href={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/setup#smooth-scroll`}
            underline
          >
            smooth-scrolling
          </Hyperlink>
          {'. Alternatively, there is a '}
          <InlineCode>
            {'scrollToID'}
          </InlineCode>
          {' method on the provider which uses the browser\s native '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView"
            underline
            newTab
          >
            scrollIntoView
          </Hyperlink>
          {'. The '}
          <InlineCode>
            {'<JumplistButton>'}
          </InlineCode>
          {' component is thin wrapper around this API.'}
        </p>
        <p>
          {'If you need more granular control, see the '}
          <Hyperlink
            href="/docs/jumplist/api"
            underline
          >
            API
          </Hyperlink>
          {' for full details.'}
        </p>
      </Margin>
      <Margin bottom="xs">
        <Heading
          id="features"
          href="/docs/jumplist#features"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist#features`}
          element='h5'
        >
          Key features
        </Heading>
        <StyledList
          items={[
            (
              <div key={0}>
                Tracks DOM elements as they enter and exit the viewport
              </div>
            ),
            (
              <div key={1}>
                Provides a lightweight wrapper around Intersection Observer
              </div>
            ),
          ]}
        />
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/jumplist/index.tsx`}
      pageName="Jumplist"
      pageTitle="Jumplist"
      metaDescription="The Jumplist package."
    />
  )
};

JumplistDoc.Layout = DocLayout;

export default JumplistDoc;
