import { Box, Button, Container, Flex, Heading, Image, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaCheckCircle, FaEnvelope, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" my={10}>
        <Heading as="h1" size="2xl" mb={2}>
          Welcome to Our SaaS Platform
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Revolutionizing your business with cutting-edge solutions.
        </Text>
        <Button rightIcon={<FaRocket />} colorScheme="blue" mt={5} size="lg">
          Get Started
        </Button>
      </Flex>

      <Box as="section" py={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          About Us
        </Heading>
        <Text fontSize="lg" textAlign="center" px={2}>
          Our platform provides seamless integration of your business operations, enhancing efficiency and productivity with state-of-the-art technology.
        </Text>
      </Box>

      <Box as="section" py={10} bg="gray.50">
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Features
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={10} justify="center">
          <VStack spacing={4} align="center">
            <FaCheckCircle size="3rem" color="#3182ce" />
            <Text fontSize="lg" fontWeight="bold">
              Feature One
            </Text>
            <Text textAlign="center">Enhance your workflow with our advanced analytics dashboard.</Text>
          </VStack>
          <VStack spacing={4} align="center">
            <FaCheckCircle size="3rem" color="#3182ce" />
            <Text fontSize="lg" fontWeight="bold">
              Feature Two
            </Text>
            <Text textAlign="center">Automate tasks and save time with our AI-driven tools.</Text>
          </VStack>
          <VStack spacing={4} align="center">
            <FaCheckCircle size="3rem" color="#3182ce" />
            <Text fontSize="lg" fontWeight="bold">
              Feature Three
            </Text>
            <Text textAlign="center">Secure your data with top-notch cybersecurity measures.</Text>
          </VStack>
        </Stack>
      </Box>

      <Box as="section" py={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Pricing
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={10} justify="center">
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="lg">
              Basic
            </Heading>
            <Text mt={4}>$29/month</Text>
            <Text mt={1}>Ideal for small teams starting out.</Text>
            <Button mt={4} colorScheme="blue">
              Choose Plan
            </Button>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="lg">
              Pro
            </Heading>
            <Text mt={4}>$99/month</Text>
            <Text mt={1}>Perfect for growing businesses scaling up.</Text>
            <Button mt={4} colorScheme="blue">
              Choose Plan
            </Button>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="lg">
              Enterprise
            </Heading>
            <Text mt={4}>Contact us for pricing</Text>
            <Text mt={1}>Custom solutions for large enterprises.</Text>
            <Button mt={4} colorScheme="blue">
              Contact Us
            </Button>
          </Box>
        </Stack>
      </Box>

      <Box as="section" py={10} bg="gray.50">
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Contact Us
        </Heading>
        <Stack spacing={3} maxW="lg" mx="auto">
          <Input placeholder="Your Name" />
          <Input placeholder="Email Address" type="email" />
          <Textarea placeholder="Your Message" />
          <Button rightIcon={<FaEnvelope />} colorScheme="blue" mt={4}>
            Send Message
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Index;
