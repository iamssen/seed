import routerStore from 'app/route/syncRouterStore';
import * as React from 'react';

export interface Props {

}

interface InternalProps {

}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  static displayName: string = 'RouterContents';
  
  render() {
    return [
      routerStore.getRoute('/'),
      routerStore.getRoute('/sample'),
    ].map((comp, i) => React.cloneElement(comp, {key: 'router-' + i}));
  }
}

export default Component as React.ComponentClass<Props>;