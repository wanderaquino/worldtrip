import {Icon} from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri"
import Link from "next/link"

export function PreviousButton () {
    return (
        <Link href="/">
            <a>
                <Icon fontSize="1.7rem" as={RiArrowLeftSLine} aria-label="Botão voltar"/>
            </a>
        </Link>
    )
}