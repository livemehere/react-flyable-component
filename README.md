# React FlyAble

This is a super simple React component that allows you to make any element flyable and Fixable.   

## Install

```bash
npm install react-flyable

yarn add react-flyable
```

## Usage

Simply wrap any component with the FlyAble component and pass in the flyAble and fixed props.   
There are two options for flyAble and fixed props.   
Each option is functionally independent.   

```jsx
<FlyAble flyAble={true} fixed={false}>
    <ExampleComp />
</FlyAble>
```

## Demo

### flyAble : true

You can drag Component around the screen.

![flyable-option.gif](demo%2Fflyable-option.gif)

### fixed : true

You can fix Component on the screen.

![fixed-option.gif](demo%2Ffixed-option.gif)

