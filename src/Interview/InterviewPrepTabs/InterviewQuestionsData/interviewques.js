import sunrise from './circuitimages/sunrise.jpeg'
import circuit1 from './circuitimages/circuit1.GIF'
import circuit2 from './circuitimages/circuit2.jpg'
import circuit3 from './circuitimages/circuit3.gif'
import circuit4 from './circuitimages/circuit4.gif'
import circuit6 from './circuitimages/circuit6.png'
import circuit7 from './circuitimages/circuit7.png'
import circuit9 from './circuitimages/circuit9.gif'
import circuit11 from './circuitimages/circuit11.gif'
import circuit12 from './circuitimages/circuit12.gif'
import circuit13 from './circuitimages/circuit13.gif'
import circuit14 from './circuitimages/circuit14.png'
import circuit16 from './circuitimages/circuit16.gif'
import circuit17 from './circuitimages/circuit17.png'
import circuit18 from './circuitimages/circuit18.gif'
import circuit19 from './circuitimages/circuit19.gif'
import circuit20 from './circuitimages/circuit20.gif'
import circuit21 from './circuitimages/circuit21.gif'
import circuit22 from './circuitimages/circuit22.gif'
import circuit23 from './circuitimages/circuit23.gif'
import circuit25 from './circuitimages/circuit25.gif'
import circuit26 from './circuitimages/circuit26.jpg'
import circuit27 from './circuitimages/circuit27.jpg'
import circuit28 from './circuitimages/circuit28.png'
import circuit30 from './circuitimages/circuit30.gif'
import circuit31 from './circuitimages/circuit31.gif'
import circuit32 from './circuitimages/circuit32.gif'
import circuit33 from './circuitimages/circuit33.gif'
// const questions={
//   1:{
//     Index: 1,
//     Question:"Two capacitors are connected in parallel through a switch. C1= 1uF, C2= 0.25uF. Initially the switch is open, C1 is charged to 10V. What happens if we close the switch?",
//     Image:circuit1,
//     Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. \nSince there are no losses in the circuit the amount of charge remains the same: \nU1C1 + U2C2 = U3(C1+C2) \nBoth caps will share the same voltage potential U3, \nU3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V. Voltage on the cap C2 in this scenario builds up almost instantly. Why, because Tau=R*C2 and since R is assumed as zero, Tau =0s. Thus, there appears to be a sharp voltage build-up on C2. As for the spark, some energy will be lost and the voltage on both caps be slightly less that 8V. ",
//     AnswerImage:""
//   },
//   2:{
//     Index: 2,
//     Question: "You have 2 switches to control the light in the long corridor. You want to be able to turn the light on entering the corridor and turn it off at the other end. Do the wiring circuit. ",
//     Image:"",
//     Answer: "",
//     AnswerImage:circuit2
//   },
//   3:{
//     Index: 3,
//     Question: "There are 3 switches that can turn on and off a light in the room. How to connect them? ",
//     Image:"",
//     Answer:"",
//     AnswerImage:circuit3
//   },
//   4:{
//     Index: 4,
//     Question: "What will be the voltage level between the two capacitors? The Vcc = 10v DC.",
//     Image:circuit4,
//     Answer: "Q1= V1*C1  	  	//amount of charge on C1  Q2= V2*C2	 	  	//amount of charge on C2  Q = Q1 = Q2	 	  	//all caps in series have the same charge  (V-V2)*C1=V2*C2    	V2=V*C1/(C1+C2)    	V2=10*20/50=4V	   	//the result ",
//     AnswerImage:""
//   },
//   5:{
//     Index: 5,
//     Question: "Suppose, you work on a specification for a system with some digital parameters. Each parameter has Min, Typ and Max value in the table. In what column would you put a setup and hold time? ",
//     Image:"",
//     Answer: "setup time is the minimum time for which the signal is held before the application of the clock signal. Thus setup time will be put in the Min column. Whereas after the clock signal is applied, the signal is maintained stable for a period of time defining it as the Hold time. Thus this should be placed after the Min column i.e. Typ column. Also Setup time indicates the maximum delay produced in the input signal before the onset of the clock signal. ",
//     AnswerImage:""
//   },
//   6:{
//     Index: 6,
//     Question: "Design a simple circuit based on combinational logic to double the output frequency.",
//     Image:circuit6,
//     Answer: "Every signal will appear with a delay on the input 1 comparing to input 2 (see the schematic above) of the XOR element. The delay is equal to the propagation time of the NOT gates. Due to the delay the XOR element will generate a pulse on every change of the input signal.",
//     AnswerImage:circuit7
//   },
//   7:{
//     Index: 7,
//     Question: "8bit ADC with parallel output converts an input signal into digital numbers. You have to come up with an idea of a circuit that finds the MAX of every 10 numbers at the output of ADC. ",
//     Image:circuit9,
//     Answer: "The FIFO is 8 bit wide and 10 words deep. It will require 8*10 flip-flops. Every two stages of the FIFO are brought out to comparator and multiplexer. The comparator compares two 8 bit numbers and enables the multiplexer to choose the maximum of these two numbers. It will require 9 pairs of comparator/multiplexer to find the MAX number out of 10. So far, with every new clock there will be a new MAX number at the output. ",
//     AnswerImage:""
//   },
//   8:{
//     Index: 8,
//     Question: "Implement a comparator that compares two 2-bit numbers A and B. The comparator should have 3 outputs:  A > B, A < B, A = B. Do it two ways:  - using combinational logic;  - using multiplexers. Write HDL code for your schematic at RTL and gate level.",
//     Image:circuit11,
//     Answer: "",
//     AnswerImage:circuit12
//   },
//   9:{
//     Index: 9,
//     Question: "Suppose, You have 8 bit ADC with a sampling rate of 1mS.  Design a system that will sort the output data and keep statistics of how often each binary number appears at the output of ADC.     ",
//     Image:"",
//     Answer: "The diagram illustrates the basic idea of a possible solution: using RAM to store statistical data. The digital number that is to be stored would be a RAM address. Once digital data at the output of ADC becomes available, memory controller generates RD signal, and the content of the memory cell addressed by ADC's output latches into D register. \"1\" in the D-register enables WR signal to the next memory cell. To calculate how many times a certain number appeared at the output of ADC it necessary to summarize the content of all memory cells.",
//     AnswerImage:circuit13
//   },
//   10:{
//     Index: 10,
//     Question: "How to implement D-latch from a multiplexer? Implement D- latch from - RS flip flop; - multiplexer.",
//     Image:"",
//     Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V ",
//     AnswerImage:""
//   },
//   11:{
//     Index: 11,
//     Question: "How to convert D-latch into JK-latch and JK-latch into D-latch? ",
//     Image:"",
//     Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V ",
//     AnswerImage:circuit14
//   },
//   12:{
//     Index: 12,
//     Question: "There are two counters to 16 built from negedge D- FF . The first circuit is a synchronous one and the second one is a \"ripple\" (cascading). Which circuit has less delay? ",
//     Image:"",
//     Answer: "1 - is ripple counter; 2 - synchronous. Both circuits consist of 4 FF, while the synchronous counter also needs some logic to control it's operation. From diagram 3 (for ripple) and 4 (for synchronous) it is seen that the propagation delay of the ripple counter is 4* t_prop , while the synchronous counter has only 1* t_prop. ",
//     AnswerImage:circuit16
//   },
//   13:{
//     Index: 13,
//     Question: "What is the difference between a flip-flop and a latch? Write an HDL code for their behavioral models. What is the difference between a flip-flop and a latch? ",
//     Image:"",
//     Answer: "",
//     AnswerImage:circuit17
//   },
//   14:{
//     Index: 14,
//     Question: "Describe the operation of a DAC. What are the most critical parameters of a DAC? Do we really need both INL and DNL to estimate linearity? ",
//     Image:circuit18,
//     Answer: "",
//     AnswerImage:""
//   },
//   15:{
//     Index: 15,
//     Question: "How will the output signal of an ideal integrator look like after - a positive pulse is applied to the input?  - a series of 10 positive pulses ? ",
//     Image:circuit20,
//     Answer: "waveform 2 shows the output of integrator after a single pulse was applied to the input. waveform 3 shows the output of integrator changing with every new input pulse until it reaches -Vcc.",
//     AnswerImage:circuit21
//   },
//   16:{
//     Index: 16,
//     Question: "how to design a divide-by-3 counter with 50% duty cycle? ",
//     Image:"",
//     Answer: "Start with the timing diagram. It shows an input clock, an output of a regular divide-by-3 counter and an output of divide-by-3 counter with 50% duty cycle.",
//     AnswerImage:circuit22
//   },
//   17:{
//     Index: 17,
//     Question: "TFor an 8-bit flash A/D converter with an input range from 0V to 2.55V, describe what happens when the input voltage changes from 1.27V to 1.28V ",
//     Image:"",
//     Answer: "The output should change from 127 to 128 ",
//     AnswerImage:""
//   },
//   18:{
//     Index: 18,
//     Question: "Your system has CPU, ALU and two 8 bit registers. There is no external memory. Can you swap the content of the registers ?",
//     Image:"",
//     Answer: "",
//     AnswerImage:""
//   },
//   19:{
//     Index: 19,
//     Question: "I swapped the transistors in CMOS inverter (put n-transistor at the top and p-transistor at the bottom). Can I use this circuit as a non-inverting buffer? ",
//     Image:"",
//     Answer: "",
//     AnswerImage:""
//   },
//   20:{
//     Index: 20,
//     Question: "Convert D-latch into divider by 2. What is the max clock frequency the circuit can handle ? ",
//     Image:"",
//     Answer: "2 sensors are required to indicate the direction of rotating. They are placed like at the drawing. One sensor is connected to the data input of D flip-flop, and the second one - to the clock input. If the circle rotates the way clock sensor sees the light first while D input (second sensor) is zero - the output of the flip-flop equals zero, and  if D input sensor \"fires\" first - the output of the flip-flop becomes high.   ",
//     AnswerImage:circuit30
//   },
//   21:{
//     Index: 21,
//     Question: "The circle can rotate clockwise and back. Use minimum hardware to build a circuit to indicate the direction of rotating. ",
//     Image:"",
//     Answer: "",
//     AnswerImage:""
//   },
//   22:{
//     Index: 22,
//     Question: "A device based on CMOS circuit draws higher current when temperature gets:- higher? - lower? ",
//     Image:"",
//     Answer: "A device draws higher current when temperature gets lower. We know from VLSI basics that a current through a MOS transistor depends on 2 parameters: Vt - threshold voltage ; K - coefficient of electron mobility and a device geometry aspect. Both Vt and K are temperature sensitive. The magnitude of Vt decreases by 2mV for every 1 degree C rise in temperature. This decrease in Vt correspondingly increases drain current. However, K - decreases with temperature and its effect is a dominant one. This may sound strange, since we remember from physics that electron mobility increases with temperature. Yes, the chaotic electron mobility increases while interfering with direct current flow. ",
//     AnswerImage:""
//   },
//   23:{
//     Index: 23,
//     Question: "To enter the office people have to pass through the corridor. Once someone gets into the office the light turns on. It goes off when noone is present in the room. There are two registration sensors in the corridor.  Build a state machine diagram and design a circuit to control the light.",
//     Image:"",
//     Answer: "",
//     AnswerImage:circuit31
//   },
//   24:{
//     Index: 24,
//     Question: "A voltage source with internal impedance Z_source = 50 OHm is connected to a transmission line with Z = 50 OHm. Z_load is also 50 OHm. The voltage source generates a single voltage step 1V. What will be the voltage level on the load? ",
//     Image:"",
//     Answer: "When load impedance Z_load equals Z_transmission_line , the impedance of transmission line matches load impedance. The reflection coefficient= 0. Voltage is divided between Z_source and Z_load.",
//     AnswerImage:""
//   },
//   25:{
//     Index: 25,
//     Question: "We have a FIFO which clocks data in at 100mhz and clocks data out at 80mhz. On the input there are only 80 data bits in any order during each 100 clocks. In other words, a 100 input clock will carry only 80 data bits, and the other twenty clocks carry no data (data is scattered in any order). How big the FIFO needs to be to avoid data over/under-run?	",
//     Image:"",
//     Answer: "",
//     AnswerImage:""
//   },
//   26:{
//     Index: 26,
//     Question: "Instead of specifying SETUP and HOLD time for data and clock in digital system, can we just specify a SETUP time for '1' and a SETUP time for '0'? ",
//     Image:"",
//     Answer: "",
//     AnswerImage:""
//   },
//   27:{
//     Index: 27,
//     Question: "What is the purpose of the diode next to relay on the schematic?",
//     Image:circuit32,
//     Answer: "",
//     AnswerImage:""
//   },
//   28:{
//     Index: 28,
//     Question: "There is a system with 4 flash memory banks. When data comes to the system, it will randomly send it to one of the 4 banks. The system has a feature called Native Command Queuing (NCQ) which allows the host to send multiple commands at a time. The number of commands sent at a time is called the queue depth. With a queue depth of 1, only 1 of 4 memory banks will be active. With a queue depth of 2, we expect 2 of 4 flash memory banks to be active except in the case when both commands are to the same bank. The question is, what is the expected number of flash memory banks that would be active, given queue depths of: 2, 4, 8, and 16 ? ",
//     Image:"",
//     Answer: "",
//     AnswerImage:""
//   },
//   29:{
//     Index: 29,
//     Question: "How do you synchronize different CLK Speeds in a system?",
//     Image:"",
//     Answer: "",
//     AnswerImage:""
//   },
//   30:{
//     Index: 30,
//     Question: "Describe a finite state machine that will detect three consecutive coin tosses (of one coin) that result in heads.",
//     Image:"",
//     Answer: "",
//     AnswerImage:""
//   },
//   31:{
//     Index: 31,
//     Question: "You have a driver that drives a long line & connects to an input device. At the input device there is either overshoot, undershoot or signal threshold violations, what can be done to correct this problem?",
//     Image:"",
//     Answer: "",
//     AnswerImage:""
//   },
//   32:{
//     Index: 32,
//     Question: "How many bit combinations are there in a byte?",
//     Image:"",
//     Answer: "",
//     AnswerImage:""
//   },
  
  
// }

const questions=[
  {
    Index: 1,
    Question:"Two capacitors are connected in parallel through a switch. C1= 1uF, C2= 0.25uF. Initially the switch is open, C1 is charged to 10V. What happens if we close the switch?",
    Image:circuit1,
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. \nSince there are no losses in the circuit the amount of charge remains the same: \nU1C1 + U2C2 = U3(C1+C2) \nBoth caps will share the same voltage potential U3, \nU3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V. Voltage on the cap C2 in this scenario builds up almost instantly. Why, because Tau=R*C2 and since R is assumed as zero, Tau =0s. Thus, there appears to be a sharp voltage build-up on C2. As for the spark, some energy will be lost and the voltage on both caps be slightly less that 8V. ",
    AnswerImage:""
  },
  {
    Index: 2,
    Question: "You have 2 switches to control the light in the long corridor. You want to be able to turn the light on entering the corridor and turn it off at the other end. Do the wiring circuit. ",
    Image:"",
    Answer: "",
    AnswerImage:circuit2
  },
  {
    Index: 3,
    Question: "There are 3 switches that can turn on and off a light in the room. How to connect them? ",
    Image:"",
    Answer:"",
    AnswerImage:circuit3
  },
  {
    Index: 4,
    Question: "What will be the voltage level between the two capacitors? The Vcc = 10v DC.",
    Image:circuit4,
    Answer: "Q1= V1*C1  	  	//amount of charge on C1  Q2= V2*C2	 	  	//amount of charge on C2  Q = Q1 = Q2	 	  	//all caps in series have the same charge  (V-V2)*C1=V2*C2    	V2=V*C1/(C1+C2)    	V2=10*20/50=4V	   	//the result ",
    AnswerImage:""
  },
  {
    Index: 5,
    Question: "Suppose, you work on a specification for a system with some digital parameters. Each parameter has Min, Typ and Max value in the table. In what column would you put a setup and hold time? ",
    Image:"",
    Answer: "setup time is the minimum time for which the signal is held before the application of the clock signal. Thus setup time will be put in the Min column. Whereas after the clock signal is applied, the signal is maintained stable for a period of time defining it as the Hold time. Thus this should be placed after the Min column i.e. Typ column. Also Setup time indicates the maximum delay produced in the input signal before the onset of the clock signal. ",
    AnswerImage:""
  },
  {
    Index: 6,
    Question: "Design a simple circuit based on combinational logic to double the output frequency.",
    Image:circuit6,
    Answer: "Every signal will appear with a delay on the input 1 comparing to input 2 (see the schematic above) of the XOR element. The delay is equal to the propagation time of the NOT gates. Due to the delay the XOR element will generate a pulse on every change of the input signal.",
    AnswerImage:circuit7
  },
  {
    Index: 7,
    Question: "8bit ADC with parallel output converts an input signal into digital numbers. You have to come up with an idea of a circuit that finds the MAX of every 10 numbers at the output of ADC. ",
    Image:circuit9,
    Answer: "The FIFO is 8 bit wide and 10 words deep. It will require 8*10 flip-flops. Every two stages of the FIFO are brought out to comparator and multiplexer. The comparator compares two 8 bit numbers and enables the multiplexer to choose the maximum of these two numbers. It will require 9 pairs of comparator/multiplexer to find the MAX number out of 10. So far, with every new clock there will be a new MAX number at the output. ",
    AnswerImage:""
  },
  {
    Index: 8,
    Question: "Implement a comparator that compares two 2-bit numbers A and B. The comparator should have 3 outputs:  A > B, A < B, A = B. Do it two ways:  - using combinational logic;  - using multiplexers. Write HDL code for your schematic at RTL and gate level.",
    Image:circuit11,
    Answer: "",
    AnswerImage:circuit12
  },
  {
    Index: 9,
    Question: "Suppose, You have 8 bit ADC with a sampling rate of 1mS.  Design a system that will sort the output data and keep statistics of how often each binary number appears at the output of ADC.     ",
    Image:"",
    Answer: "The diagram illustrates the basic idea of a possible solution: using RAM to store statistical data. The digital number that is to be stored would be a RAM address. Once digital data at the output of ADC becomes available, memory controller generates RD signal, and the content of the memory cell addressed by ADC's output latches into D register. \"1\" in the D-register enables WR signal to the next memory cell. To calculate how many times a certain number appeared at the output of ADC it necessary to summarize the content of all memory cells.",
    AnswerImage:circuit13
  },
  {
    Index: 10,
    Question: "How to implement D-latch from a multiplexer? Implement D- latch from - RS flip flop; - multiplexer.",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V ",
    AnswerImage:""
  },
  {
    Index: 11,
    Question: "How to convert D-latch into JK-latch and JK-latch into D-latch? ",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V ",
    AnswerImage:circuit14
  },
  {
    Index: 12,
    Question: "There are two counters to 16 built from negedge D- FF . The first circuit is a synchronous one and the second one is a \"ripple\" (cascading). Which circuit has less delay? ",
    Image:"",
    Answer: "1 - is ripple counter; 2 - synchronous. Both circuits consist of 4 FF, while the synchronous counter also needs some logic to control it's operation. From diagram 3 (for ripple) and 4 (for synchronous) it is seen that the propagation delay of the ripple counter is 4* t_prop , while the synchronous counter has only 1* t_prop. ",
    AnswerImage:circuit16
  },
  {
    Index: 13,
    Question: "What is the difference between a flip-flop and a latch? Write an HDL code for their behavioral models. What is the difference between a flip-flop and a latch? ",
    Image:"",
    Answer: "",
    AnswerImage:circuit17
  },
  {
    Index: 14,
    Question: "Describe the operation of a DAC. What are the most critical parameters of a DAC? Do we really need both INL and DNL to estimate linearity? ",
    Image:circuit18,
    Answer: "",
    AnswerImage:""
  },
  {
    Index: 15,
    Question: "How will the output signal of an ideal integrator look like after - a positive pulse is applied to the input?  - a series of 10 positive pulses ? ",
    Image:circuit20,
    Answer: "waveform 2 shows the output of integrator after a single pulse was applied to the input. waveform 3 shows the output of integrator changing with every new input pulse until it reaches -Vcc.",
    AnswerImage:circuit21
  },
  {
    Index: 16,
    Question: "how to design a divide-by-3 counter with 50% duty cycle? ",
    Image:"",
    Answer: "Start with the timing diagram. It shows an input clock, an output of a regular divide-by-3 counter and an output of divide-by-3 counter with 50% duty cycle.",
    AnswerImage:circuit22
  },
  {
    Index: 17,
    Question: "TFor an 8-bit flash A/D converter with an input range from 0V to 2.55V, describe what happens when the input voltage changes from 1.27V to 1.28V ",
    Image:"",
    Answer: "The output should change from 127 to 128 ",
    AnswerImage:""
  },
  {
    Index: 18,
    Question: "Your system has CPU, ALU and two 8 bit registers. There is no external memory. Can you swap the content of the registers ?",
    Image:"",
    Answer: "",
    AnswerImage:""
  },
  {
    Index: 19,
    Question: "I swapped the transistors in CMOS inverter (put n-transistor at the top and p-transistor at the bottom). Can I use this circuit as a non-inverting buffer? ",
    Image:"",
    Answer: "",
    AnswerImage:""
  },
  {
    Index: 20,
    Question: "Convert D-latch into divider by 2. What is the max clock frequency the circuit can handle ? ",
    Image:"",
    Answer: "2 sensors are required to indicate the direction of rotating. They are placed like at the drawing. One sensor is connected to the data input of D flip-flop, and the second one - to the clock input. If the circle rotates the way clock sensor sees the light first while D input (second sensor) is zero - the output of the flip-flop equals zero, and  if D input sensor \"fires\" first - the output of the flip-flop becomes high.   ",
    AnswerImage:circuit30
  },
  {
    Index: 21,
    Question: "The circle can rotate clockwise and back. Use minimum hardware to build a circuit to indicate the direction of rotating. ",
    Image:"",
    Answer: "",
    AnswerImage:""
  },
  {
    Index: 22,
    Question: "A device based on CMOS circuit draws higher current when temperature gets:- higher? - lower? ",
    Image:"",
    Answer: "A device draws higher current when temperature gets lower. We know from VLSI basics that a current through a MOS transistor depends on 2 parameters: Vt - threshold voltage ; K - coefficient of electron mobility and a device geometry aspect. Both Vt and K are temperature sensitive. The magnitude of Vt decreases by 2mV for every 1 degree C rise in temperature. This decrease in Vt correspondingly increases drain current. However, K - decreases with temperature and its effect is a dominant one. This may sound strange, since we remember from physics that electron mobility increases with temperature. Yes, the chaotic electron mobility increases while interfering with direct current flow. ",
    AnswerImage:""
  },
  {
    Index: 23,
    Question: "To enter the office people have to pass through the corridor. Once someone gets into the office the light turns on. It goes off when noone is present in the room. There are two registration sensors in the corridor.  Build a state machine diagram and design a circuit to control the light.",
    Image:"",
    Answer: "",
    AnswerImage:circuit31
  },
  {
    Index: 24,
    Question: "A voltage source with internal impedance Z_source = 50 OHm is connected to a transmission line with Z = 50 OHm. Z_load is also 50 OHm. The voltage source generates a single voltage step 1V. What will be the voltage level on the load? ",
    Image:"",
    Answer: "When load impedance Z_load equals Z_transmission_line , the impedance of transmission line matches load impedance. The reflection coefficient= 0. Voltage is divided between Z_source and Z_load.",
    AnswerImage:""
  },
  {
    Index: 25,
    Question: "We have a FIFO which clocks data in at 100mhz and clocks data out at 80mhz. On the input there are only 80 data bits in any order during each 100 clocks. In other words, a 100 input clock will carry only 80 data bits, and the other twenty clocks carry no data (data is scattered in any order). How big the FIFO needs to be to avoid data over/under-run?	",
    Image:"",
    Answer: "",
    AnswerImage:""
  },
  {
    Index: 26,
    Question: "Instead of specifying SETUP and HOLD time for data and clock in digital system, can we just specify a SETUP time for '1' and a SETUP time for '0'? ",
    Image:"",
    Answer: "",
    AnswerImage:""
  },
  {
    Index: 27,
    Question: "What is the purpose of the diode next to relay on the schematic?",
    Image:circuit32,
    Answer: "",
    AnswerImage:""
  },
  {
    Index: 28,
    Question: "There is a system with 4 flash memory banks. When data comes to the system, it will randomly send it to one of the 4 banks. The system has a feature called Native Command Queuing (NCQ) which allows the host to send multiple commands at a time. The number of commands sent at a time is called the queue depth. With a queue depth of 1, only 1 of 4 memory banks will be active. With a queue depth of 2, we expect 2 of 4 flash memory banks to be active except in the case when both commands are to the same bank. The question is, what is the expected number of flash memory banks that would be active, given queue depths of: 2, 4, 8, and 16 ? ",
    Image:"",
    Answer: "",
    AnswerImage:""
  },
  {
    Index: 29,
    Question: "How do you synchronize different CLK Speeds in a system?",
    Image:"",
    Answer: "",
    AnswerImage:""
  },
  {
    Index: 30,
    Question: "Describe a finite state machine that will detect three consecutive coin tosses (of one coin) that result in heads.",
    Image:"",
    Answer: "",
    AnswerImage:""
  },
  {
    Index: 31,
    Question: "You have a driver that drives a long line & connects to an input device. At the input device there is either overshoot, undershoot or signal threshold violations, what can be done to correct this problem?",
    Image:"",
    Answer: "",
    AnswerImage:""
  },
  {
    Index: 32,
    Question: "How many bit combinations are there in a byte?",
    Image:"",
    Answer: "",
    AnswerImage:""
  },
  
  
]

export default questions