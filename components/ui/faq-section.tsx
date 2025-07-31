import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

function FAQ() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">FAQ</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Frequently Asked Questions
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  Get answers to common questions about hospice care, our services, and how we can support you and your loved ones during this important time.
                </p>
              </div>
              <div className="">
                <Button className="gap-4" variant="outline">
                  Any questions? Reach out <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="payment">
              <AccordionTrigger>
                How is hospice care paid for?
              </AccordionTrigger>
              <AccordionContent>
                Most hospice care is covered by Medicare, Medicaid, and private insurance. We work directly with insurance providers to minimize out-of-pocket expenses for families. Our admissions team will verify your benefits and explain any potential costs upfront.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="eligibility">
              <AccordionTrigger>
                Who is eligible for hospice care?
              </AccordionTrigger>
              <AccordionContent>
                Hospice care is available for individuals with a life-limiting illness and a prognosis of six months or less if the disease runs its normal course. Common conditions include cancer, heart disease, dementia, respiratory conditions, and stroke complications.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="location">
              <AccordionTrigger>
                Where is hospice care provided?
              </AccordionTrigger>
              <AccordionContent>
                Hospice care can be provided wherever the patient calls home - whether that's their own residence, a family member's home, assisted living facility, or nursing home. We also have inpatient facilities for situations requiring more intensive medical management.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="services">
              <AccordionTrigger>
                What services are included in hospice care?
              </AccordionTrigger>
              <AccordionContent>
                Our comprehensive hospice services include pain and symptom management, nursing care, personal care assistance, social work support, spiritual care, medical equipment and supplies, medications related to the hospice diagnosis, and bereavement support for families.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="family">
              <AccordionTrigger>
                How does hospice support family members?
              </AccordionTrigger>
              <AccordionContent>
                We provide extensive support to family members including education about caregiving, emotional and spiritual support, respite care to give family caregivers a break, and bereavement counseling that continues for up to 13 months after the loss of a loved one.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="timing">
              <AccordionTrigger>
                When is the right time to consider hospice care?
              </AccordionTrigger>
              <AccordionContent>
                The earlier hospice care begins, the more benefit patients and families receive. Consider hospice when curative treatments are no longer effective or desired, when comfort becomes the primary goal, or when frequent hospitalizations occur. It's never too early to have the conversation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="team">
              <AccordionTrigger>
                Who is part of the hospice care team?
              </AccordionTrigger>
              <AccordionContent>
                Our interdisciplinary team includes physicians, nurses, home health aides, social workers, chaplains, volunteers, and other specialists as needed. Each team member brings unique expertise to ensure comprehensive, compassionate care for both patients and families.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="quality">
              <AccordionTrigger>
                How do you ensure quality of life?
              </AccordionTrigger>
              <AccordionContent>
                We focus on managing pain and symptoms effectively, supporting emotional and spiritual needs, maintaining dignity and independence as much as possible, and helping patients engage in meaningful activities and relationships. Quality of life is at the heart of everything we do.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export { FAQ };