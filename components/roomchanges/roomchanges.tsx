"use client";
import React from "react";
import oldRoomchangesConfig from "@/public/storage/roomchanges.json";
import { useState } from "react";
import { Button } from "@nextui-org/react";

type RoomChange = [number, string, string, string];
type ClassRoomChanges = {
  [key: string]: Record<string, RoomChange[]>;
  all: Record<string, RoomChange[]>;
};
type RoomchangesConfig = Record<string, ClassRoomChanges>;

const roomchangesConfig = oldRoomchangesConfig as unknown as RoomchangesConfig;

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
const yyyy = today.getFullYear();

const today_date = "2024.09.09"; // yyyy + "." + mm + "." + dd;

export const RoomChanges = () => {
  let todayRoomchangesConfig: ClassRoomChanges | null = null;

  // Az új formátumban a `roomchangesConfig` egy objektum, és a dátum alapján keressük meg az adatokat
  if (roomchangesConfig[today_date]) {
    todayRoomchangesConfig = roomchangesConfig[today_date];
  }

  const [selectedGroup, setSelect] = useState<string | null>(null);

  return (
    <div className="text-foreground">
      {/* Osztályok neveinek megjelenítése, ha van az adott dátumhoz tartozó helyettesítés */}
      <div className="flex gap-2 overflow-auto py-2 scrollbar-hide">
        {todayRoomchangesConfig &&
          Object.keys(todayRoomchangesConfig).map((group, groupIndex) => (
            <Button
              key={groupIndex}
              size="sm"
              onClick={() => setSelect(group)}
              className={`text-md rounded-xl ${
                selectedGroup === group
                  ? "bg-selfprimary-400"
                  : "bg-selfprimary-200"
              } `}
            >
              {group}
            </Button>
          ))}
      </div>

      {/* Az adott osztályhoz tartozó helyettesítések megjelenítése */}
      <div className="grid max-w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {todayRoomchangesConfig &&
          selectedGroup &&
          todayRoomchangesConfig[selectedGroup].all.map(
            (change: RoomChange, changeIndex: number) => (
              <p
                key={changeIndex}
                className="min-w-fit rounded-xl bg-default-300 px-3 py-1"
              >
                {change[0] +
                  ". óra " +
                  change[3] +
                  " | " +
                  change[1] +
                  " ➜ " +
                  change[2]}
              </p>
            ),
          )}
      </div>
    </div>
  );
};
