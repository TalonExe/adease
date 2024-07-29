"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import React, { useState } from "react";

const Page = () => {
  const [color, setColor] = useState(0);

  const buttonList = [
    <Button key={0} className={`w-full bg-black`}>
      Sign in
    </Button>,
    <Button key={1} className={`w-full bg-green-400`}>
      Sign in
    </Button>,
    <Button key={2} className={`w-full bg-purple-600`}>
      Sign in
    </Button>,
    <Button key={3} className={`w-full bg-purple-600`}>
      Sign in
    </Button>,
  ];

  const [colors, setColors] = useState(buttonList[0]); // Set initial color

  const handlePrev = () => {
    const newColorIndex = (color - 1 + buttonList.length) % buttonList.length; // Wrap around
    setColor(newColorIndex);
    setColors(buttonList[newColorIndex]);
  };

  const handleNext = () => {
    setColor((color + 1) % buttonList.length);
    setColors(buttonList[color]);
  };
  return (
    <Layout>
      <div className="p-4 px-8 my-4 w-full h-full">
        <div className="flex w-full justify-between">
          <span className="font-sans font-bold text-2xl p-2">
            Landing Page Generator
          </span>
          <Button>Submit</Button>
        </div>

        <div className="flex flex-col h-full w-full justify-center items-center bg-bg bg-cover">
          <Card className="w-full max-w-sm flex flex-col justify-stretch">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              {colors}
            </CardContent>
          </Card>
          <div className="flex flex-row p-4 gap-4">
            <Button onClick={handlePrev} disabled={color == 0}>
              prev
            </Button>
            <Button onClick={handleNext} disabled={color == 3}>
              next
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
