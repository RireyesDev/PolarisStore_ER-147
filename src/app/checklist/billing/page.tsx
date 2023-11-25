'use client'
import React from "react";
import styled from "styled-components";
import { CardEditForm } from "@/components/Card_EditForm";
import { Navigator } from "@/containers/Navigator";
import { Main } from "@/containers/Main";


export default function Billing() {
    return (
        <>            
            <Navigator></Navigator> 
            <Main>
                <CardEditForm></CardEditForm>
            </Main>
        </>       
    )
}