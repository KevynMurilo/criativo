import React, { Component } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


class Accordion01 extends Component {
    render(){
        return(
            <Accordion className="accodion-style--1" preExpanded={'0'}>
                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Minha Formação Acadêmica
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p> Tenho 2 graduações e 1 MBA na área educacional.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Abordagem de Trabalho
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Meu trabalho é individualizado e extremamente sigiloso, visando melhor atender às necessidades do cliente e sua família.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Afiliada
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Sou associada à 5 Rings Financial, que atua na indústria financeira há mais de 20 anos e representa empresas com mais de 150 anos no setor. O CEO da empresa é Mike Wilk, e a sede está localizada em Denver, Colorado.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Hobbies
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Yoga, natação e dançar.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        )
    }
}

export default Accordion01;





