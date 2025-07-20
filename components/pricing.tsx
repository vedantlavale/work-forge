"use client";

import React, { useState } from "react";
import { motion, useInView } from "motion/react";
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
    margin: "-50px",
    amount: 0.1,
  });

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      description: "Perfect for individuals",
      monthlyPrice: 19,
      yearlyPrice: 199,
      features: [
        "50,000 AI words per month",
        "20+ content templates",
        "Basic SEO optimization",
        "Email support",
        "Brand voice training",
      ],
      buttonText: "Start Free Trial",
    },
    {
      name: "Professional",
      description: "For growing businesses",
      monthlyPrice: 49,
      yearlyPrice: 499,
      features: [
        "200,000 AI words per month",
        "50+ content templates",
        "Advanced SEO tools",
        "Priority support",
        "Team collaboration",
        "Custom brand voices",
        "Analytics dashboard",
      ],
      buttonText: "Start Free Trial",
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 99,
      yearlyPrice: 999,
      features: [
        "Unlimited AI words",
        "All content templates",
        "Advanced integrations",
        "Dedicated account manager",
        "Custom AI training",
        "White-label solution",
        "Advanced analytics",
        "API access",
      ],
      buttonText: "Contact Sales",
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
        ease: [0.25, 0.25, 0, 1] as const,
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
        ease: [0.25, 0.25, 0, 1] as const,
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
        ease: [0.25, 0.25, 0, 1] as const,
      },
    },
  };

  return (
    <section ref={ref} className="relative z-10 bg-black/50 backdrop-blur-sm border-t border-white/10 text-white py-8 sm:py-12 md:py-20 px-4 sm:px-6">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.header variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6"
            >
              Pricing
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4"
            >
              Choose the perfect plan for your content creation needs
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              variants={toggleVariants}
              className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16"
            >
              <motion.span
                className="text-sm sm:text-base md:text-lg font-medium"
                animate={{
                  color: !isYearly ? "#ffffff" : "#ffffff80",
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
                  className="data-[state=checked]:bg-yellow-400 data-[state=unchecked]:bg-white/20 transition-all duration-300 scale-100 sm:scale-110 md:scale-125"
                  aria-label="Toggle between monthly and yearly billing"
                />
              </motion.div>

              <motion.span
                className="text-sm sm:text-base md:text-lg font-medium"
                animate={{
                  color: isYearly ? "#ffffff" : "#ffffff80",
                  scale: isYearly ? 1.05 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Yearly
              </motion.span>
            </motion.div>
          </motion.header>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
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
                className="w-full"
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white h-full p-3 sm:p-4 md:p-6 lg:p-8 relative overflow-hidden hover:bg-white/10 transition-all duration-300 w-full flex flex-col">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent pointer-events-none" />

                  <CardHeader className="pb-3 sm:pb-4 md:pb-6 relative z-10">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-white/70 text-xs sm:text-sm md:text-base">
                      {plan.description}
                    </CardDescription>

                    <div className="mt-4 sm:mt-6 md:mt-8">
                      <div className="flex items-baseline">
                        <motion.span
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                          key={`${plan.name}-${
                            isYearly ? "yearly" : "monthly"
                          }`}
                          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{
                            duration: 0.5,
                            ease: [0.25, 0.25, 0, 1] as const,
                          }}
                        >
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </motion.span>
                        <motion.span
                          className="text-white/60 ml-2 text-sm sm:text-base md:text-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                        >
                          {isYearly ? "/yr" : "/mo"}
                        </motion.span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 sm:space-y-6 md:space-y-8 relative z-10 flex-1 flex flex-col">
                    <div className="space-y-2 sm:space-y-3 md:space-y-4 flex-1">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-start gap-2 md:gap-3"
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
                            ease: [0.25, 0.25, 0, 1] as const,
                          }}
                        >
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm md:text-base text-white/80">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="pt-2 sm:pt-3 md:pt-4"
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
                        className="w-full bg-yellow-400 border-2 border-yellow-400 text-black font-semibold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg rounded-xl transition-all duration-300 hover:bg-yellow-300 hover:border-yellow-300 hover:shadow-lg hover:shadow-yellow-400/25 active:scale-[0.98]"
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
