import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { Hyperlink } from '@components/Hyperlink';
import { CodeBlock } from '@components/CodeBlock';
import { InlineCode } from '@components/InlineCode';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';
import { InstallationCode } from '@components/InstallationCode';

const ScrollInfoInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Scroll Info Basic Setup"
      />
      <h4>
        Basic Setup
      </h4>
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/scroll-info/setup#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/scroll-info/setup#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="scroll-info" />
      </Margin>
      <p>
        First, wrap your app with the provider. This component does not render anything, and should be nearest to the top of your app as possible to encompass any components that need to read from the provided context. This is also where your breakpoints get defined:
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { ScrollInfoProvider } from \'@faceless-ui/scroll-info\';

export const App = () => {
  return (
    <ScrollInfoProvider>
      ...
    </ScrollInfoProvider>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Then, consume the context however you need. The '}
        <InlineCode>
          useScrollInfo
        </InlineCode>
        {' hook is the most common use case:'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { useScrollInfo } from \'@faceless-ui/scroll-info\';

export const MyComponent = (props) => {
    const scrollInfo = useScrollInfo();
    return (
      ...
    );
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'For more advanced setups, see the full '}
        <Hyperlink
          underline
          href="/docs/scroll-info/api"
        >
          API reference
        </Hyperlink>
        .
      </p>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/scroll-info/installation.tsx`}
    />
  )
};

ScrollInfoInstallation.Layout = DocLayout;

export default ScrollInfoInstallation;
