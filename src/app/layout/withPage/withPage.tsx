import * as React from 'react';

function withPage<P extends object>(title: string, Component: React.ComponentType<P>): React.FC<P> {
  const Page = ({ ...props }: {}): JSX.Element => (
    <section className="page">
      <header className="page">
        <h2>{title}</h2>
      </header>
      <article className="page">
        <Component {...(props as P)} />
      </article>
    </section>
  );
  return Page;
}

export default withPage;
