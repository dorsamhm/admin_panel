import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export function DefaultAccordion({dashboard, dashboardTitles, apps, appsTitles, pages, pagesTitles, form, formTitles}) {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="w-full h-full">
            <Accordion open={(open === 1) || (open === 0)}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                    {dashboard}
                </AccordionHeader>
                <AccordionBody>
                    {dashboardTitles}
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    {apps}
                </AccordionHeader>
                <AccordionBody>
                    {appsTitles}
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    {pages}
                </AccordionHeader>
                <AccordionBody>
                   {pagesTitles}
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                   {form}
                </AccordionHeader>
                <AccordionBody>
                    {formTitles}
                </AccordionBody>
            </Accordion>
        </div>
    );
}