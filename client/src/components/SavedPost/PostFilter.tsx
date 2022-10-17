import { useTheme } from "@emotion/react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ArticleList } from "./index";
import LayoutStyle from "./style";

type Props = {
  visualized: string;
  handleChange: any;
  tagList: string[];
  postList: ArticleList[];
  visualizedList?: ArticleList[];
};

export default function PostFilter({
  visualized,
  visualizedList,
  handleChange,
  tagList,
  postList,
}: Props) {
  return (
    <Box maxWidth="700px">
      <TabContext value={visualized}>
        <TabList
          color="main"
          value={visualized}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          onChange={handleChange}
          textColor="primary"
        >
          <Tab label="All" value="All" />
          {tagList.map((ele, i) => (
            <Tab
              sx={LayoutStyle.tabLabel}
              key={tagList[i]}
              label={tagList[i]}
              value={tagList[i]}
            />
          ))}
        </TabList>
        <TabPanel value="All">
          {postList?.map((ele) => (
            <div key={ele.id}>
              {ele.title} <br />
              {ele.article}
            </div>
          ))}
        </TabPanel>
        {tagList.map((ele) => (
          <TabPanel value={ele} key={ele}>
            {visualizedList?.map((ele) => (
              <div key={ele.id}>
                {ele.title} <br />
                {ele.article}
              </div>
            ))}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
