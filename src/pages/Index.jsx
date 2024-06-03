import { useState } from "react";
import { Container, VStack, HStack, Text, CircularProgress, CircularProgressLabel, Progress, Box, Button, IconButton } from "@chakra-ui/react";
import { FaTachometerAlt, FaBullseye, FaCog } from "react-icons/fa";

const Index = () => {
  const [view, setView] = useState("Day");

  const toggleView = () => {
    setView(view === "Day" ? "Week" : "Day");
  };

  const efficiencyScore = 85; // Example efficiency score
  const nutritionProgress = (1989 / 2200) * 100;
  const workoutsProgress = (44 / 45) * 100;
  const restProgress = (7.75 / 8) * 100;

  return (
    <Container maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" py={4}>
      {/* Top Section */}
      <VStack spacing={4} width="100%">
        <CircularProgress value={efficiencyScore} color="green.400" size="120px">
          <CircularProgressLabel>{efficiencyScore}%</CircularProgressLabel>
        </CircularProgress>
        <Button onClick={toggleView}>Toggle View: {view}</Button>
      </VStack>

      {/* Bottom Section */}
      <VStack spacing={4} width="100%">
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
          <Text fontSize="lg" mb={2}>
            Nutrition
          </Text>
          <Text mb={2}>Calories Today: 1989 cal / 2200 cal</Text>
          <Progress value={nutritionProgress} colorScheme="red" size="lg" />
        </Box>
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
          <Text fontSize="lg" mb={2}>
            Workouts
          </Text>
          <Text mb={2}>Total Time Today: 44 min / 45 min</Text>
          <Progress value={workoutsProgress} colorScheme="blue" size="lg" />
        </Box>
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
          <Text fontSize="lg" mb={2}>
            Rest & Recovery
          </Text>
          <Text mb={2}>Time Asleep Today: 7 hr 44 min / 8 hr</Text>
          <Progress value={restProgress} colorScheme="green" size="lg" />
        </Box>
      </VStack>

      {/* Navigation Bar */}
      <HStack spacing={8} width="100%" justifyContent="center" py={4} borderTopWidth={1}>
        <IconButton aria-label="Dashboard" icon={<FaTachometerAlt />} size="lg" />
        <IconButton aria-label="Goals" icon={<FaBullseye />} size="lg" />
        <IconButton aria-label="Settings" icon={<FaCog />} size="lg" />
      </HStack>
    </Container>
  );
};

export default Index;
