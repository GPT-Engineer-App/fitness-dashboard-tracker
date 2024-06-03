import { useState } from "react";
import { Container, VStack, HStack, Text, CircularProgress, CircularProgressLabel, Progress, Box, Button, IconButton, Flex } from "@chakra-ui/react";
import { FaTachometerAlt, FaBullseye, FaCog, FaAppleAlt, FaDumbbell, FaBed } from "react-icons/fa";

const Index = () => {
  const [view, setView] = useState("Day");

  const toggleView = (newView) => {
    setView(newView);
  };

  const efficiencyScore = 85; // Example efficiency score
  const nutritionProgress = (1989 / 2200) * 100;
  const workoutsProgress = (44 / 45) * 100;
  const restProgress = (7.75 / 8) * 100;

  return (
    <Container maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" py={4}>
      {/* Top Section */}
      <VStack spacing={4} width="100%">
        <Flex>
          <CircularProgress value={efficiencyScore} color="green.400" size="120px">
            <CircularProgressLabel>{efficiencyScore}%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <HStack>
          <Button variant={view === "Day" ? "solid" : "outline"} onClick={() => toggleView("Day")}>
            Day
          </Button>
          <Button variant={view === "Week" ? "solid" : "outline"} onClick={() => toggleView("Week")}>
            Week
          </Button>
        </HStack>
      </VStack>

      {/* Bottom Section */}
      <VStack spacing={4} width="100%">
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg" display="flex" alignItems="center">
          <VStack width="33%" alignItems="center">
            <Text fontWeight="bold">Nutrition</Text>
            <FaAppleAlt size="24px" />
          </VStack>
          <VStack width="67%" alignItems="flex-start">
            <Text>Calories Today</Text>
            <Progress value={nutritionProgress} colorScheme="red" size="lg" width="100%" />
            <Text>1989 cal / 2200 cal</Text>
            <Text>{nutritionProgress.toFixed(2)}%</Text>
          </VStack>
        </Box>
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg" display="flex" alignItems="center">
          <VStack width="33%" alignItems="center">
            <Text fontWeight="bold">Workouts</Text>
            <FaDumbbell size="24px" />
          </VStack>
          <VStack width="67%" alignItems="flex-start">
            <Text>Total Time Today</Text>
            <Progress value={workoutsProgress} colorScheme="blue" size="lg" width="100%" />
            <Text>44 min / 45 min</Text>
            <Text>{workoutsProgress.toFixed(2)}%</Text>
          </VStack>
        </Box>
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg" display="flex" alignItems="center">
          <VStack width="33%" alignItems="center">
            <Text fontWeight="bold">Rest & Recovery</Text>
            <FaBed size="24px" />
          </VStack>
          <VStack width="67%" alignItems="flex-start">
            <Text>Time Asleep Today</Text>
            <Progress value={restProgress} colorScheme="green" size="lg" width="100%" />
            <Text>7 hr 44 min / 8 hr</Text>
            <Text>{restProgress.toFixed(2)}%</Text>
          </VStack>
        </Box>
      </VStack>

      {/* Navigation Bar */}
      <HStack spacing={8} width="100%" justifyContent="space-around" py={4} borderTopWidth={1} bg="gray.100">
        <FaTachometerAlt size="24px" color="gray.600" />
        <FaBullseye size="24px" color="gray.600" />
        <FaCog size="24px" color="gray.600" />
      </HStack>
    </Container>
  );
};

export default Index;
