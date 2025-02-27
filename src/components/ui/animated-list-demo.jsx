"use client";

import { cn } from "../../utils/cn";
import { AnimatedList } from "./animated-list";
import { useEffect, useState } from "react";

let notifications = [
  {
    name: "תשלום התקבל למעורלדת!",
    description: "תתכוננו! הקרנבל מתחיל בקרוב, כל התשלומים נקלטו בהצלחה.",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "משתתפת חדשה הצטרפה!",
    description: "ההתרגשות גוברת! יש לנו עוד אדם במעגל הבלתי נגמר של המעורלדת.",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "הודעה חדשה!",
    description: "תכינו את עצמכם! הפתעות נוספות בדרך לאירוע המדהים ביותר.",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "אירוע שוריין!",
    description: "המעורלדת של השנה הולכת להיות מטורפת, אל תפספסו!",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles with glass effect (background transparency)
        "bg-white/50 backdrop-blur-lg [box-shadow:none]", // שינוי צבע לרקע שקוף עם אפקט glass
        "dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg text-black dark:text-white">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500 dark:text-gray-300">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-black dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }) {
  const [notificationsList, setNotificationsList] = useState(notifications);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNotificationsList((prevNotifications) => {
        return [...prevNotifications, ...notifications];
      });
    }, 5000); // כל 5 שניות נוסיף עוד התראה

    return () => clearInterval(intervalId); // עצור את הלולאה כשמפסיקים להשתמש בקומפוננטה
  }, []);

  return (
    <div className={cn("relative flex h-[500px] w-full flex-col overflow-hidden p-2", className)}>
      <AnimatedList>
        {notificationsList.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}