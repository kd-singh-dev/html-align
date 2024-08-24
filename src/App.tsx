import { useState } from 'react';
import './App.css';
import { MyColumn, MyRow, CrossAxisAlignment, MainAxisAlignment, MainAxisSize, Square, MyExpanded } from './Components';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function App() {
  return (
    <div style={{ backgroundColor: "#282c34" }}>
      <h2 style={{ color: "white", margin: 0, padding: 12 }}>
        Let's Play with HTML Layouts
      </h2>
      <PlayWithRow />
      <div style={{ height: "70vh" }}>
        <PlayWithColumn />
      </div>
    </div>
  );
}

function PlayWithRow() {


  const [rowConfig, setRowConfig] = useState<{
    gap: string;
    mainAxisAlignment: MainAxisAlignment;
    crossAxisAlignment: CrossAxisAlignment;
    mainAxisSize: MainAxisSize;
  }>({
    gap: "20px",
    mainAxisAlignment: "start",
    crossAxisAlignment: "center",
    mainAxisSize: "min"
  });

  return (
    <>
      <h4 style={{ margin: 0, color: "white" }}>Row</h4>


      <Box gap={20} display={"flex"} sx={{ backgroundColor: "lightgray" }} style={{ padding: "16px" }}>

        <FormControl fullWidth>
          <InputLabel>Main Axis Size</InputLabel>
          <Select label="Main Axis Alignment" value={rowConfig?.mainAxisSize} onChange={(e) => setRowConfig({ ...rowConfig, mainAxisSize: e.target.value as MainAxisSize })}>
            <MenuItem value={"min"}>Min</MenuItem>
            <MenuItem value={"max"}>Max</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Main Axis Alignment</InputLabel>
          <Select label="Main Axis Alignment" value={rowConfig?.mainAxisAlignment} onChange={(e) => setRowConfig({ ...rowConfig, mainAxisAlignment: e.target.value as MainAxisAlignment })}>
            <MenuItem value={"spaceAround"}>spaceAround</MenuItem>
            <MenuItem value={"spaceBetween"}>spaceBetween</MenuItem>
            <MenuItem value={"spaceEvenly"}>spaceEvenly</MenuItem>
            <MenuItem value={"start"}>start</MenuItem>
            <MenuItem value={"end"}>end</MenuItem>
            <MenuItem value={"center"}>center</MenuItem>
          </Select>
        </FormControl>


        <FormControl fullWidth>
          <InputLabel>Cross Axis Alignment</InputLabel>
          <Select label="Cross Axis Alignment" value={rowConfig?.crossAxisAlignment} onChange={(e) => setRowConfig({ ...rowConfig, crossAxisAlignment: e.target.value as CrossAxisAlignment })}>
            <MenuItem value={"start"} >start</MenuItem>
            <MenuItem value={"end"} >end</MenuItem>
            <MenuItem value={"center"} >center</MenuItem>
            <MenuItem value={"stretch"} >stretch</MenuItem>
            <MenuItem value={"baseline"} >baseline</MenuItem>
          </Select>
        </FormControl>

        {/* <FormControl fullWidth>
          <InputLabel>Cross Axis Alignment</InputLabel>
          <Select label="Cross Axis Alignment" value={rowConfig?.crossAxisAlignment} onChange={(e) => setRowConfig({ ...rowConfig, crossAxisAlignment: e.target.value as CrossAxisAlignment })}>
            <MenuItem value={"start"} >start</MenuItem>
            <MenuItem value={"end"} >end</MenuItem>
            <MenuItem value={"center"} >center</MenuItem>
            <MenuItem value={"stretch"} >stretch</MenuItem>
            <MenuItem value={"baseline"} >baseline</MenuItem>
          </Select>
        </FormControl> */}

        <FormControl fullWidth>
          <InputLabel>Gap</InputLabel>
          <Select label="Gap" value={rowConfig?.gap} onChange={(e) => setRowConfig({ ...rowConfig, gap: e.target.value as string })}>
            <MenuItem value={"20px"}>20px</MenuItem>
            <MenuItem value={"40px"}>40px</MenuItem>
            <MenuItem value={"60px"}>60px</MenuItem>
            <MenuItem value={"80px"}>80px</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <MyRow gap={rowConfig.gap} mainAxisSize={rowConfig.mainAxisSize} mainAxisAlignment={rowConfig.mainAxisAlignment} crossAxisAlignment={rowConfig.crossAxisAlignment}>
        <Square size={40} color={"lightblue"} />
        <Square size={60} color={"lightgreen"} />
        <Square size={20} color={"lightpink"} />
        <Square size={30} color={"yellow"} />
        <Square size={15} color={"violet"} />
      </MyRow>
    </>
  )
}

function PlayWithColumn() {


  const [colConfig, setColConfig] = useState<{
    gap: string;
    mainAxisAlignment: MainAxisAlignment;
    crossAxisAlignment: CrossAxisAlignment;
    mainAxisSize: MainAxisSize;
  }>({
    gap: "20px",
    mainAxisAlignment: "start",
    crossAxisAlignment: "center",
    mainAxisSize: "min"
  });

  return (
    <>
      <h4 style={{ margin: 0, color: "white" }}>Column</h4>

      <Box gap={20} display={"flex"} sx={{ backgroundColor: "lightgray" }} style={{ padding: "16px" }}>

        <FormControl fullWidth>
          <InputLabel>Main Axis Size</InputLabel>
          <Select label="Main Axis Alignment" value={colConfig?.mainAxisSize} onChange={(e) => setColConfig({ ...colConfig, mainAxisSize: e.target.value as MainAxisSize })}>
            <MenuItem value={"min"}>Min</MenuItem>
            <MenuItem value={"max"}>Max</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Main Axis Alignment</InputLabel>
          <Select label="Main Axis Alignment" value={colConfig?.mainAxisAlignment} onChange={(e) => setColConfig({ ...colConfig, mainAxisAlignment: e.target.value as MainAxisAlignment })}>
            <MenuItem value={"spaceAround"}>spaceAround</MenuItem>
            <MenuItem value={"spaceBetween"}>spaceBetween</MenuItem>
            <MenuItem value={"spaceEvenly"}>spaceEvenly</MenuItem>
            <MenuItem value={"start"}>start</MenuItem>
            <MenuItem value={"end"}>end</MenuItem>
            <MenuItem value={"center"}>center</MenuItem>
          </Select>
        </FormControl>


        <FormControl fullWidth>
          <InputLabel>Cross Axis Alignment</InputLabel>
          <Select label="Cross Axis Alignment" value={colConfig?.crossAxisAlignment} onChange={(e) => setColConfig({ ...colConfig, crossAxisAlignment: e.target.value as CrossAxisAlignment })}>
            <MenuItem value={"start"} >start</MenuItem>
            <MenuItem value={"end"} >end</MenuItem>
            <MenuItem value={"center"} >center</MenuItem>
            <MenuItem value={"stretch"} >stretch</MenuItem>
            <MenuItem value={"baseline"} >baseline</MenuItem>
          </Select>
        </FormControl>

        {/* <FormControl fullWidth>
          <InputLabel>Cross Axis Alignment</InputLabel>
          <Select label="Cross Axis Alignment" value={colConfig?.crossAxisAlignment} onChange={(e) => setColConfig({ ...colConfig, crossAxisAlignment: e.target.value as CrossAxisAlignment })}>
            <MenuItem value={"start"} >start</MenuItem>
            <MenuItem value={"end"} >end</MenuItem>
            <MenuItem value={"center"} >center</MenuItem>
            <MenuItem value={"stretch"} >stretch</MenuItem>
            <MenuItem value={"baseline"} >baseline</MenuItem>
          </Select>
        </FormControl> */}

        <FormControl fullWidth>
          <InputLabel>Gap</InputLabel>
          <Select label="Gap" value={colConfig?.mainAxisSize} onChange={(e) => setColConfig({ ...colConfig, gap: e.target.value as string })}>
            <MenuItem value={"min"}>20px</MenuItem>
            <MenuItem value={"max"}>40px</MenuItem>
            <MenuItem value={"max"}>60px</MenuItem>
            <MenuItem value={"max"}>80px</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <MyColumn mainAxisSize={colConfig.mainAxisSize} gap={colConfig.gap} mainAxisAlignment={colConfig.mainAxisAlignment} crossAxisAlignment={colConfig.crossAxisAlignment}>
        <Square size={40} color={"lightblue"} />
        <Square size={60} color={"lightgreen"} />
        <Square size={20} color={"lightpink"} />
        <Square size={30} color={"yellow"} />
        <Square size={15} color={"violet"} />
      </MyColumn>
    </>
  )
}

export default App;
