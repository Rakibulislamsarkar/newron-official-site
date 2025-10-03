"use client";

import React, {useEffect, useRef, useState} from 'react';

const colors  = new Map<string, string[]>();

colors.set("default", ["#F973167F", "#1E40AF7F", "#4646E57F"]);
colors.set("compVision",["#53D5F17F", "#4051FC7F", "#251E8E7F"]);
colors.set("software3",["#A949EF7F", "rgba(30,13,178,0.5)", "#2316937F"]);


const BgElements = () => {

    const [currentSection, setCurrentSection] = useState("default");
    const previousSection = React.useRef(currentSection);
    const intersectionLog = useRef({});

    useEffect(() => {

        const colorChangeHandler = (e : any) => {
            const sectionName = e.sectionName as string | undefined | null;

            // @ts-ignore
            intersectionLog.current[sectionName] = e.intersectionRatio as number | undefined | null;

            const logEntries = Object.entries(intersectionLog.current);

            const sortedEntries = logEntries.sort((a,b) => {
                return (b[1] as number) - (a[1] as number);
            });

            const [sectionNameWithMaxIntersection, maxRatio] = sortedEntries[0] as [string, number];

            if(maxRatio === 0) {
                setCurrentSection("default");
                previousSection.current = sectionName || "default";
            }
            else {
                setCurrentSection(sectionNameWithMaxIntersection);
                previousSection.current = sectionName || "default";
            }

        }

        window.addEventListener("sectionChange",colorChangeHandler);

        return () => {
            window.removeEventListener("sectionChange", colorChangeHandler);
        }

    },[]);

    return (
            <div className={"h-screen w-screen overflow-hidden "}>
                <div style={{backgroundColor: colors.get(currentSection)?.[0] || colors.get("default")?.[0]}}
                     className={"absolute w-[50vw] h-[50vw] rounded-full -left-[30vw] top-[20vh] bg-orange-500 bg-opacity-50 transition duration-500 ease-in"}
                />
                <div style={{backgroundColor: colors.get(currentSection)?.[1] || colors.get("default")?.[1]}}
                     className={"absolute w-[50vw] h-[50vw] rounded-full left-1/3 -top-[20vh] bg-blue-800 bg-opacity-50 animate-pulse transition duration-500 ease-in"}
                />
                <div style={{backgroundColor: colors.get(currentSection)?.[2] || colors.get("default")?.[2]}}
                     className={"absolute w-[50vw] h-[50vw] rounded-full -right-[20vw] top-1/2 bg-indigo-600 bg-opacity-50 transition duration-500 ease-in"}
                />
                <div className={"w-full h-full backdrop-blur-[250px]"}/>
            </div>
    );
};

export default BgElements;