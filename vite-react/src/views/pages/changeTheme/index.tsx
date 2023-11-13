import { FC } from "react"
import { useParams } from "react-router-dom";




// 改变背景主题色
const ChangeTheme: FC = () => {
  const toggleTheme = (event: React.MouseEvent) => {


    const params = useParams() as { courseId: string }
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    let isDark: boolean;

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      const root = document.documentElement;
      isDark = root.classList.contains("dark");
      root.classList.remove(isDark ? "dark" : "light");
      root.classList.add(isDark ? "light" : "dark");
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: isDark ? clipPath.reverse() : clipPath,
        },
        {
          duration: 800,
          easing: "ease-in",
          pseudoElement: isDark ? "::view-transition-old(root)" : "::view-transition-new(root)",
        }
      );
    });
  }

  return (
    <>
      <div className="bule">
        <div className='pb50'>fjdhfjdhafdf</div>
        <div onClick={toggleTheme}>按钮</div>
      </div>
    </>
  );
};

export default ChangeTheme;
