# SPFx React unit testing install packages and setup - part 1 #

## Summary

Here are the packages we would install in order to get started with SPFx React web part unit testing.

```
...
  "devDependencies": {
    "@microsoft/sp-build-web": "~1.3.0",
    "@microsoft/sp-module-interfaces": "~1.3.0",
    "@microsoft/sp-webpart-workbench": "~1.3.0",
    "gulp": "~3.9.1",
    "@types/chai": ">=3.4.34 <3.6.0",
    "@types/mocha": ">=2.2.33 <2.6.0",
    "@types/sinon": "2.3.3",
    "@types/enzyme":"2.8.11",
    "chai-enzyme": "0.8.0",
    "enzyme": "2.9.1",
    "react-addons-test-utils": "15.6.0"
  }
....
```

That sample shows how SPFx React component can be mounted on Mocha before hook.

```typescript
describe('ReactTestingPart1WebPart', () => {

  let reactComponent: ReactWrapper;

  /**
   * Before the tests run. 
   */
  before(() => {

    reactComponent = mount(React.createElement(
      ReactTestingPart1,
      {
        description: "test"
      }
    ));

    // Alternativly rename the current file from .ts to .tsx and mount in an HTML/XML fashion.
    // reactComponent = mount(<ReactTestingPart1 description="test" />);
  });
``` 
One basic test is executed to check it an HTML element exists within the mounted React component.

```typescript
it('should welcome element exist', () => {

    // Define the css selector.
    let cssSelector: string = '.ms-font-xl .ms-fontColor-white';

    // Find the elemet using css selector.
    let element: ReactWrapper<React.AllHTMLAttributes<{}>> = reactComponent.find(cssSelector);

    expect(element).to.exist;
  });
```

## Used SharePoint Framework Version 
![drop](https://img.shields.io/badge/drop-1.3-green.svg)



