# SPFx React debug unit tests - part 2 #

## Summary

SPFx web part unit tests debugging with Karma with the Chrome browser.

```
  gulp test --debug
```

This command will start Karma server at http://localhost:9876/ so that url can be copied in any modern browser and it's debugging tools can be used to further debug the unit tests along with the SPFx React component. If we open the Chrome Developer Tools (F12) and navigate to the Sources tab then expand the top folder in the left pane, then navigate to `top/base/temp/tests.js`

We can place `debugger` where we would like to stop the execution of the code and debug from there like that:

```typescript
 it('should welcome element exist', () => {
    debugger;
    
    // Define the css selector.
    let cssSelector: string = '.ms-font-xl .ms-fontColor-white';

    // Find the elemet using css selector.
    let element: ReactWrapper<React.AllHTMLAttributes<{}>> = reactComponent.find(cssSelector);

    expect(element).to.exist;
  });
``` 
More at [https://blog.velingeorgiev.com/sharepoint-framework-debug-unit-tests](SharePoint Framework debug unit tests by Velin Georgiev)


