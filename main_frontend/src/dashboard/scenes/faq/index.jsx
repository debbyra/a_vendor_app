import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../../theme";

const FAQ = () => { 
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded  sx={{ backgroundColor: colors.primary[400]}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Who is the owner of Extreme Cafe?
          </Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
            Extreme Cafe is owned by a group of partners called the Super Coders
            who have shares in the cafe.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[400]}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I make two orders?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can click on the add to cart button below the different food
            items, then proceed to the cart icon on the top right of the screen
            then click order.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[400]}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Where can I find the discounts?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The discounts are found on the home page of the website as you scroll up.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[400]}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[400]}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
