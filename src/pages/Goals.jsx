import { Box, Heading, Text, VStack, HStack, Icon, Button } from "@chakra-ui/react";
import { FaAppleAlt, FaDumbbell, FaBed } from "react-icons/fa";
import { useState } from "react";

const goalsData = [
  {
    icon: FaAppleAlt,
    header: "Nutrition",
    subHeader: "Healthy Eating",
    body: "Maintain a balanced diet with a variety of nutrients. Ensure you consume enough fruits, vegetables, and proteins. Avoid processed foods and sugary drinks.",
  },
  {
    icon: FaDumbbell,
    header: "Workouts",
    subHeader: "Regular Exercise",
    body: "Engage in regular physical activity. Aim for at least 30 minutes of moderate exercise most days of the week. Include both cardio and strength training in your routine.",
  },
  {
    icon: FaBed,
    header: "Rest & Recovery",
    subHeader: "Adequate Sleep",
    body: "Ensure you get enough sleep each night. Aim for 7-9 hours of quality sleep. Practice good sleep hygiene by maintaining a regular sleep schedule and creating a restful environment.",
  },
];

function Goals() {
  const [expanded, setExpanded] = useState(Array(goalsData.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4} textAlign="left">
        Goals
      </Heading>
      <VStack spacing={4}>
        {goalsData.map((goal, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg" w="100%">
            <HStack spacing={4}>
              <Icon as={goal.icon} boxSize={12} />
              <VStack align="start" spacing={1} w="100%">
                <Text fontSize="lg" fontWeight="bold">
                  {goal.subHeader}
                </Text>
                <Text fontSize="md">{goal.header}</Text>
                <Text noOfLines={expanded[index] ? undefined : 2}>{goal.body}</Text>
                <Button size="sm" onClick={() => toggleExpand(index)}>
                  {expanded[index] ? "Read less" : "Read more"}
                </Button>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default Goals;
