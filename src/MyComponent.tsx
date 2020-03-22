import * as React from "react";

export function MyComp(props: { a: string }) {
  if (false) {
    // React Hook "React.useState" is called conditionally ....
    const [state, setState] = React.useState();
  }

  React.useEffect(() => {
    console.log(props.a);
    // React Hook React.useEffect has a missing dependency: 'props.a'. Either include it or remove the dependency array.
  }, []);

  return (
    <div
      style={{}}
      onClick={() => {
        console.log("Hey");
      }}
    >
      <div style={{}}>
        <div style={{}}>
          <div style={{}}>
            <div style={{}}>Heya</div>
          </div>
        </div>
      </div>
    </div>
  );
}
