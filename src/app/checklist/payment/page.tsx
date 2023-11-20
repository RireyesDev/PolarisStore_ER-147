'use client'
import React from "react";
import styled from "styled-components";
import { CardEditPayment } from "@/components/Card_EditPayment";
import { Navigator } from "@/containers/Navigator";


export default function Payment() {
    return(
        <>
            <Navigator></Navigator>
            <CardEditPayment></CardEditPayment>
        </>
    );
}