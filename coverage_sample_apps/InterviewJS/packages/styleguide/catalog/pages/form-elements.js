import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import {
  CharacterCount,
  Checkbox,
  Form,
  Label,
  Legend,
  TextInput
} from "../components";

export default () => markdown`

  ## Form

  ${(
    <ReactSpecimen>
      <Form>This is a form</Form>
    </ReactSpecimen>
  )}

  ## Text Inputs

  ${(
    <ReactSpecimen span={3}>
      <TextInput input type="text" placeholder="Placeholder text…" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <TextInput input type="email" placeholder="Placeholder text…" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <TextInput input type="number" placeholder="Placeholder text…" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <TextInput input type="date" placeholder="Placeholder text…" />
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen>
      <TextInput area placeholder="Placeholder text…" />
    </ReactSpecimen>
  )}

  ## Checkboxes

  ${(
    <ReactSpecimen span={3}>
      <Checkbox checked onChange={(e) => console.log(e)}>
        Checkbox
      </Checkbox>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Checkbox onChange={(e) => console.log(e)}>Checkbox</Checkbox>
    </ReactSpecimen>
  )}

  ## Add-ons

  ### Labels

  ${(
    <ReactSpecimen>
      <Label>Input label</Label>
    </ReactSpecimen>
  )}

  ### Legend

  ${(
    <ReactSpecimen>
      <Legend tip="tip">i</Legend>
    </ReactSpecimen>
  )}

  ### CharacterCount

  ${(
    <ReactSpecimen>
      <CharacterCount>50</CharacterCount>
    </ReactSpecimen>
  )}

`;
