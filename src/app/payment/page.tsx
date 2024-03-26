"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TPaymentFormSchema, paymentFormSchema } from "@/lib/paymentFormSchema";

const PaymentPage = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TPaymentFormSchema>({
    resolver: zodResolver(paymentFormSchema),
    mode: "onChange",
  });

  const allFieldsFilled = watch();
  const isFormFilled = Object.values(allFieldsFilled).every((field) => field);

  const onSubmit = () => {
    router.push("/thankyou");
  };

  return (
    <MaxWidthWrapper className="flex justify-items-center items-center py-16">
      {isMounted ? (
        <Card className="w-[350px] mx-auto">
          <CardHeader>
            <CardTitle className="mx-auto py-2">Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-2">
                  <Label
                    htmlFor="name"
                    className="pl-1 text-secondary-foreground font-medium"
                  >
                    Name<span className="pl-0.5 text-emerald-600">*</span>
                  </Label>
                  <Input
                    id="name"
                    autoComplete="name"
                    {...register("name")}
                    placeholder="Name on card"
                  />
                  {errors.name && (
                    <p className="text-red-500 pl-1 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col space-y-2">
                  <Label
                    htmlFor="cardNumber"
                    className="pl-1 text-secondary-foreground font-medium"
                  >
                    Card number
                    <span className="pl-0.5 text-emerald-600">*</span>
                  </Label>
                  <Input
                    id="cardNumber"
                    autoComplete="cc-number"
                    {...register("cardNumber")}
                    placeholder="Card number"
                  />
                  {errors.cardNumber && (
                    <p className="text-red-500 pl-1 text-sm">
                      {errors.cardNumber.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="flex flex-col space-y-2 w-1/2">
                    <Label
                      htmlFor="expiresMonth"
                      className="pl-1 text-secondary-foreground font-medium"
                    >
                      Expires<span className="pl-0.5 text-emerald-600">*</span>
                    </Label>
                    <Input
                      id="expiresMonth"
                      autoComplete="cc-exp-month"
                      {...register("expiresMonth")}
                      placeholder="Month"
                    />
                    {errors.expiresMonth && (
                      <p className="text-red-500 pl-1 text-sm">
                        {errors.expiresMonth.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col space-y-2 w-1/2">
                    <Label
                      htmlFor="expiresYear"
                      className="pl-1 text-secondary-foreground font-medium"
                    >
                       
                    </Label>
                    <Input
                      id="expiresYear"
                      autoComplete="cc-exp-year"
                      {...register("expiresYear")}
                      placeholder="Year"
                    />
                    {errors.expiresYear && (
                      <p className="text-red-500 pl-1 text-sm">
                        {errors.expiresYear.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <Label
                    htmlFor="cvc"
                    className="pl-1 text-secondary-foreground font-medium"
                  >
                    CVC<span className="pl-0.5 text-emerald-600">*</span>
                  </Label>
                  <Input
                    id="cvc"
                    autoComplete="cc-csc"
                    {...register("cvc")}
                    placeholder="CVC"
                  />
                  {errors.cvc && (
                    <p className="text-red-500 pl-1 text-sm">
                      {errors.cvc.message}
                    </p>
                  )}
                </div>
              </div>

              <CardFooter className="w-full justify-items-center items-center pt-8 pb-2">
                <Button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    Object.keys(errors).length > 0 ||
                    !isFormFilled
                  }
                  className="w-full"
                  size="lg"
                  variant="emerald"
                >
                  Complete Payment
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      ) : (
        <div className="mx-auto">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      )}
    </MaxWidthWrapper>
  );
};

export default PaymentPage;
