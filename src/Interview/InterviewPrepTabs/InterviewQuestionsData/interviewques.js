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
const questions={
  1:{
    Index: 1,
    Question: "Two capacitors are connected in parallel through a switch. C1= 1uF, C2= 0.25uF. Initially the switch is open, C1 is charged to 10V. What happens if we close the switch?",
    Image:circuit1,
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  2:{
    Index: 2,
    Question: "You have 2 switches to control the light in the long corridor. You want to be able to turn the light on entering the corridor and turn it off at the other end. Do the wiring circuit. ",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  3:{
    Index: 3,
    Question: "There are 3 switches that can turn on and off a light in the room. How to connect them? ",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  4:{
    Index: 4,
    Question: "What will be the voltage level between the two capacitors? The Vcc = 10v DC.",
    Image:circuit4,
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  5:{
    Index: 5,
    Question: "Suppose, you work on a specification for a system with some digital parameters. Each parameter has Min, Typ and Max value in the table. In what column would you put a setup and hold time? ",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  6:{
    Index: 6,
    Question: "Design a simple circuit based on combinational logic to double the output frequency.",
    Image:circuit6,
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  7:{
    Index: 7,
    Question: "8bit ADC with parallel output converts an input signal into digital numbers. You have to come up with an idea of a circuit that finds the MAX of every 10 numbers at the output of ADC. ",
    Image:circuit9,
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  8:{
    Index: 8,
    Question: "Implement a comparator that compares two 2-bit numbers A and B. The comparator should have 3 outputs:  A > B, A < B, A = B. Do it two ways:  - using combinational logic;  - using multiplexers. Write HDL code for your schematic at RTL and gate level.",
    Image:circuit11,
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  9:{
    Index: 9,
    Question: "Suppose, You have 8 bit ADC with a sampling rate of 1mS.  Design a system that will sort the output data and keep statistics of how often each binary number appears at the output of ADC.     ",
    Image:circuit13,
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  10:{
    Index: 10,
    Question: "How to implement D-latch from a multiplexer? Implement D- latch from - RS flip flop; - multiplexer.",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  11:{
    Index: 11,
    Question: "How to convert D-latch into JK-latch and JK-latch into D-latch? ",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  12:{
    Index: 12,
    Question: "There are two counters to 16 built from negedge D- FF . The first circuit is a synchronous one and the second one is a \"ripple\" (cascading). Which circuit has less delay? ",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  13:{
    Index: 13,
    Question: "What is the difference between a flip-flop and a latch? Write an HDL code for their behavioral models. What is the difference between a flip-flop and a latch? ",
    Image:circuit17,
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  14:{
    Index: 14,
    Question: "Describe the operation of a DAC. What are the most critical parameters of a DAC? Do we really need both INL and DNL to estimate linearity? ",
    Image:circuit18,
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  15:{
    Index: 15,
    Question: "How will the output signal of an ideal integrator look like after - a positive pulse is applied to the input?  - a series of 10 positive pulses ? ",
    Image:circuit20,
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  16:{
    Index: 16,
    Question: "how to design a divide-by-3 counter with 50% duty cycle? ",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  17:{
    Index: 17,
    Question: "TFor an 8-bit flash A/D converter with an input range from 0V to 2.55V, describe what happens when the input voltage changes from 1.27V to 1.28V ",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  18:{
    Index: 18,
    Question: "Your system has CPU, ALU and two 8 bit registers. There is no external memory. Can you swap the content of the registers ?",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  19:{
    Index: 19,
    Question: "I swapped the transistors in CMOS inverter (put n-transistor at the top and p-transistor at the bottom). Can I use this circuit as a non-inverting buffer? ",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  20:{
    Index: 20,
    Question: "Convert D-latch into divider by 2. What is the max clock frequency the circuit can handle ? ",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  21:{
    Index: 21,
    Question: "The circle can rotate clockwise and back. Use minimum hardware to build a circuit to indicate the direction of rotating. ",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  22:{
    Index: 22,
    Question: "A device based on CMOS circuit draws higher current when temperature gets:- higher? - lower? ",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  23:{
    Index: 23,
    Question: "To enter the office people have to pass through the corridor. Once someone gets into the office the light turns on. It goes off when noone is present in the room. There are two registration sensors in the corridor.  Build a state machine diagram and design a circuit to control the light.",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  24:{
    Index: 24,
    Question: "A voltage source with internal impedance Z_source = 50 OHm is connected to a transmission line with Z = 50 OHm. Z_load is also 50 OHm. The voltage source generates a single voltage step 1V. What will be the voltage level on the load? ",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  25:{
    Index: 25,
    Question: "We have a FIFO which clocks data in at 100mhz and clocks data out at 80mhz. On the input there are only 80 data bits in any order during each 100 clocks. In other words, a 100 input clock will carry only 80 data bits, and the other twenty clocks carry no data (data is scattered in any order). How big the FIFO needs to be to avoid data over/under-run?	",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  26:{
    Index: 26,
    Question: "Instead of specifying SETUP and HOLD time for data and clock in digital system, can we just specify a SETUP time for '1' and a SETUP time for '0'? ",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  27:{
    Index: 27,
    Question: "What is the purpose of the diode next to relay on the schematic?",
    Image:circuit32,
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  28:{
    Index: 28,
    Question: "There is a system with 4 flash memory banks. When data comes to the system, it will randomly send it to one of the 4 banks. The system has a feature called Native Command Queuing (NCQ) which allows the host to send multiple commands at a time. The number of commands sent at a time is called the queue depth. With a queue depth of 1, only 1 of 4 memory banks will be active. With a queue depth of 2, we expect 2 of 4 flash memory banks to be active except in the case when both commands are to the same bank. The question is, what is the expected number of flash memory banks that would be active, given queue depths of: 2, 4, 8, and 16 ? ",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  29:{
    Index: 29,
    Question: "How do you synchronize different CLK Speeds in a system?",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  30:{
    Index: 30,
    Question: "Describe a finite state machine that will detect three consecutive coin tosses (of one coin) that result in heads.",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  31:{
    Index: 31,
    Question: "You have a driver that drives a long line & connects to an input device. At the input device there is either overshoot, undershoot or signal threshold violations, what can be done to correct this problem?",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  32:{
    Index: 32,
    Question: "How many bit combinations are there in a byte?",
    Image:"",
    Answer: "The equation for charge is Q=CU After closing the switch the charge will be distributed between the two caps. Since there are no losses in the circuit the amount of charge remains the same: U1C1 + U2C2 = U3(C1+C2) Both caps will share the same voltage potential U3, U3 =  (U1C1+U2C2)/(C1+C2) = (10*1 + 0*0.25)/1+0.25 = 8 U3= 8V "
  },
  
  
}

export default questions