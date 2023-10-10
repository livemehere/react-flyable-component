import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  flyAble?: boolean;
  fixed?: boolean;
}

const FlyAble = ({ children, flyAble = true, fixed }: Props) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [startTranslate, setStartTranslate] = useState({ x: 0, y: 0 });

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsMouseDown(true);
    setStartPos({ x: e.clientX, y: e.clientY });
    setStartTranslate(translate);
  };

  const onMouseUp = () => {
    setIsMouseDown(false);
  };

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      const pos = { x: e.clientX, y: e.clientY };
      const delta = {
        x: pos.x - startPos.x,
        y: pos.y - startPos.y,
      };

      if (isMouseDown && flyAble) {
        setTranslate({
          x: startTranslate.x + delta.x,
          y: startTranslate.y + delta.y,
        });
      }
    };
    const mouseUpHandler = () => {
      setIsMouseDown(false);
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseup", mouseUpHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [startPos, isMouseDown, startTranslate]);

  const originContent = (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
        visibility: "hidden",
      }}
    >
      {children}
    </div>
  );

  const content = (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
        transform: `translate(${translate.x}px, ${translate.y}px)`,
        position: fixed ? "fixed" : "relative",
      }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {children}
    </div>
  );

  return (
    <>
      {fixed && originContent}
      {content}
    </>
  );
};

export default FlyAble;
