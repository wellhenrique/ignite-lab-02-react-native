import React from "react";
import { Button as NativeBaseButton, Heading, IButtonProps } from "native-base";

interface ButtonData extends IButtonProps {
  title: string;
}

export function Button({ title, ...args }: ButtonData) {
  return (
    <NativeBaseButton
      bg="green.700"
      fontSize="sm"
      rounded="sm"
      _pressed={{ bg: "green.500" }}
      h={14}
      {...args}
    >
      <Heading color="white" fontSize="xl">
        {title}
      </Heading>
    </NativeBaseButton>
  );
}
