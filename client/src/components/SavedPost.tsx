import { Box, Tab, Tabs } from "@mui/material";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";

type ArticleList = {
  title: string;
  id: number;
  tag: string;
  article: string;
};

const exampleArray: ArticleList[] = [
  {
    id: 1,
    title: "Public",
    tag: "Public",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
  {
    id: 2,
    title: "Gaming",
    tag: "Gaming",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
  {
    id: 3,
    title: "Public",
    tag: "Public",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
  {
    id: 4,
    title: "Public",
    tag: "Public",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
  {
    id: 5,
    title: "Gaming",
    tag: "Gaming",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
  {
    id: 6,
    title: "Gaming",
    tag: "Gaming",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
  {
    id: 7,
    title: "Politic",
    tag: "Politic",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
  {
    id: 8,
    title: "Quest Ivan",
    tag: "Ivan",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
  },
];

const exampleTabs = ["Public", "Ivan", "Politic" , "Gaming"];

export default function SavedPost() {
  const [visualized, setVisualized] = useState("All");
  const [visualizedList, setVisualizedList] = useState<
    ArticleList[] | undefined
  >(exampleArray);

  useEffect(() => {
    if (visualized === "All") {
      setVisualizedList(exampleArray);
    } else {
      const nextVisualizedList = exampleArray.filter(
        (ele) => ele.tag === visualized
      );
      setVisualizedList(nextVisualizedList);
    }
  }, [visualized]);

  const onChange = (e: SyntheticEvent, newValue: string): void => {
    console.log(e);
    setVisualized(newValue)
  };

  return (
    <TabContext value={visualized}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        Saved Post
        <TabList
          onChange={onChange}
          value={visualized}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All" value="All" />
          {exampleTabs.map((ele, i) => (
            <Tab
              key={exampleTabs[i]}
              label={exampleTabs[i]}
              value={exampleTabs[i]}
            />
          ))}
        </TabList>
        <TabPanel value="All">{exampleArray?.map(ele => <div>
            {ele.title} <br />
            {ele.article}
        </div>)}</TabPanel>
        {exampleTabs.map( ele => (
          <TabPanel value={ele} key={ele}>
            {visualizedList?.map(ele => <div>
            {ele.title} <br />
            {ele.article}
        </div>)}
          </TabPanel>
        ))}
      </Box>
    </TabContext>
  );
}
