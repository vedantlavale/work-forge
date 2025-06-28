"use client";

import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { CheckCircle } from "lucide-react";

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  buttonText: string;
}

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(true);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.3,
  });

  const plans: PricingPlan[] = [
    {
      name: "Plus",
      description: "For personal use",
      monthlyPrice: 15,
      yearlyPrice: 179,
      features: [
        "Up to 5 team members",
        "Basic components library",
        "Community support",
        "1GB storage space",
      ],
      buttonText: "Purchase",
    },
    {
      name: "Pro",
      description: "For professionals",
      monthlyPrice: 30,
      yearlyPrice: 359,
      features: [
        "Everything in Plus, and:",
        "Unlimited team members",
        "Advanced components",
        "Priority support",
        "Unlimited storage",
      ],
      buttonText: "Purchase",
    },
  ];

  const handlePurchase = (planName: string) => {
    console.log(`Purchasing ${planName} plan`);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
      scale: 0.95,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.25, 0, 1],
      },
    }),
  };

  const toggleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <section ref={ref} className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.header variants={itemVariants} className="text-center mb-16">
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              Pricing
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 mb-12"
            >
              Check out our affordable pricing plans
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              variants={toggleVariants}
              className="flex items-center justify-center gap-6 mb-16"
            >
              <motion.span
                className="text-lg font-medium"
                animate={{
                  color: !isYearly ? "#ffffff" : "#9ca3af",
                  scale: !isYearly ? 1.05 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Monthly
              </motion.span>

              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Switch
                  checked={isYearly}
                  onCheckedChange={setIsYearly}
                  className="data-[state=checked]:bg-[#ccab55] data-[state=unchecked]:bg-gray-600 transition-all duration-300 scale-125"
                  aria-label="Toggle between monthly and yearly billing"
                />
              </motion.div>

              <motion.span
                className="text-lg font-medium"
                animate={{
                  color: isYearly ? "#ffffff" : "#9ca3af",
                  scale: isYearly ? 1.05 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Yearly
              </motion.span>
            </motion.div>
          </motion.header>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="bg-black border-gray-700 text-white h-full p-8 relative overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-800/20 pointer-events-none" />

                  <CardHeader className="pb-6 relative z-10">
                    <CardTitle className="text-2xl font-bold mb-2">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-base">
                      {plan.description}
                    </CardDescription>

                    <div className="mt-8">
                      <div className="flex items-baseline">
                        <motion.span
                          className="text-5xl font-bold"
                          key={`${plan.name}-${
                            isYearly ? "yearly" : "monthly"
                          }`}
                          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{
                            duration: 0.5,
                            ease: [0.25, 0.25, 0, 1],
                          }}
                        >
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </motion.span>
                        <motion.span
                          className="text-gray-400 ml-2 text-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                        >
                          {isYearly ? "/yr" : "/mo"}
                        </motion.span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-8 relative z-10">
                    <ul className="space-y-4" role="list">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                          animate={
                            isInView
                              ? {
                                  opacity: 1,
                                  x: 0,
                                  filter: "blur(0px)",
                                }
                              : {
                                  opacity: 0,
                                  x: -20,
                                  filter: "blur(4px)",
                                }
                          }
                          transition={{
                            delay: 0.8 + index * 0.2 + featureIndex * 0.1,
                            duration: 0.5,
                            ease: [0.25, 0.25, 0, 1],
                          }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span
                            className={`text-base ${
                              feature.includes("Everything in Plus")
                                ? "font-semibold text-white"
                                : "text-gray-300"
                            }`}
                          >
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      className="pt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      <Button
                        onClick={() => handlePurchase(plan.name)}
                        className="
    w-full
    bg-black
    border border-yellow-400/60
    text-yellow-300
    font-medium
    py-4 px-8
    text-lg
    rounded-2xl
    transition-all duration-300
    
    hover:border-yellow-300
    hover:text-yellow-100
    hover:shadow-[0_0_30px_8px_rgba(234,179,8,0.5)]
    hover:bg-yellow-400/10
    
    active:scale-[0.98]
  "
                        size="lg"
                      >
                        {plan.buttonText}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
