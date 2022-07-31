import {
  BellIcon,
  CheckIcon,
  ChevronDownIcon,
  SearchIcon,
  StarIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Text,
  Spacer,
  Tag,
  Box,
  Switch,
  Divider,
  Icon,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { BiPencil } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { FaGithub, FaRegHeart, FaTwitter } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <Flex direction="column" w="100vw" h="100vh">
      <Flex as="header" bgColor="white" px={8} py={2} alignItems="center">
        <Spacer />
        <IconButton
          aria-label="search"
          icon={<SearchIcon />}
          color="gray.darker"
          bg="none"
          _hover={{ bg: "none", color: "black" }}
        />
        <IconButton
          aria-label="notification"
          icon={<BellIcon />}
          color="gray.darker"
          bg="none"
          _hover={{ bg: "none", color: "black" }}
        />
        <Avatar
          name="tongari"
          src="https://storage.googleapis.com/zenn-user-upload/avatar/72e7ed4e72.jpeg"
          size="sm"
        />
        <Button
          color="white"
          bgColor="primary.default"
          _hover={{ bg: "primary.darker" }}
          size="sm"
          ml={4}
        >
          Add new
        </Button>
      </Flex>
      <Container as="main" m={0} p={8} w="100%" maxW="100%" bg="primary.bgc">
        <Flex direction="column" alignItems="baseline" gap={6} w="100%">
          <Flex alignItems="center">
            <Tag
              px={3}
              py={1}
              bg="primary.default"
              color="white"
              borderRadius="full"
              fontWeight="bold"
              mr={2}
            >
              Open
            </Tag>
            <Text fontSize="sm" mr={2}>
              1時間前に作成
            </Text>
            <Icon as={BsChat} color="gray.default" size="sm" mr={1} />
            <Text fontSize="sm">3</Text>
          </Flex>
          <Flex alignItems="baseline">
            <Heading as="h1" size="xl">
              Chakra UI 触ってみる
            </Heading>
            <Icon as={BiPencil} color="gray.default" w={6} h={6} />
          </Flex>
          <Button
            color="primary.default"
            p={0}
            height="fontsize.sm"
            borderRadius={0}
            _hover={{ bg: "none" }}
            _active={{ bg: "none" }}
          >
            + トピックを追加しましょう
          </Button>
          <Flex gap={4} w="100%">
            <VStack flex={1}>
              {[...Array(10)].map((_, i) => (
                <Box as="section" bg="white" px={5} py={4} w="100%" key={i}>
                  <Flex alignItems="center" gap={2}>
                    <Avatar
                      name="tongari"
                      src="https://storage.googleapis.com/zenn-user-upload/avatar/72e7ed4e72.jpeg"
                      size="sm"
                    />
                    <Text fontWeight="bold" fontSize="sm">
                      とんがり@ntogawa
                    </Text>
                    <Text fontSize="xs">1日前に更新</Text>
                    <Spacer />
                    <IconButton
                      aria-label="section-menu"
                      icon={<ChevronDownIcon w={6} h={6} />}
                      color="gray.darker"
                      bg="none"
                      w={6}
                      h={6}
                      borderRadius="full"
                    />
                  </Flex>
                  <Flex mt={4} direction="column" alignItems="baseline">
                    <Heading as="h3" size="md">
                      Scrap!!
                    </Heading>
                    <Text as="p">スクラップの投稿はこちら！！</Text>
                    <Text as="p">
                      複数行にまたがる内容でもいい感じにラップしてくれます！複数行にまたがる内容でもいい感じにラップしてくれます！複数行にまたがる内容でもいい感じにラップしてくれます！複数行にまたがる内容でもいい感じにラップしてくれます！複数行にまたがる内容でもいい感じにラップしてくれます！複数行にまたがる内容でもいい感じにラップしてくれます！複数行にまたがる内容でもいい感じにラップしてくれます！
                    </Text>
                  </Flex>
                </Box>
              ))}
            </VStack>
            <Flex direction="column" bg="white" w="300px" h="100%">
              <Flex direction="column" p={4}>
                <Button w="100%" boxShadow="base">
                  <CheckIcon color="gray.default" mr={4} />
                  <Text>スクラップをクローズ</Text>
                </Button>
                <Flex mt={4} gap={2}>
                  <Switch color="primary.default" />
                  <Text color="gray.darker" fontSize="sm">
                    他のユーザーの投稿を許可
                  </Text>
                </Flex>
              </Flex>
              <Divider />
              <Flex p={4}>
                <IconButton
                  aria-label="star"
                  icon={<Icon as={FaRegHeart} color="gray.default" />}
                  color="gray.default"
                  borderRadius="full"
                />
                <Spacer />
                <Button
                  variant="outline"
                  borderRadius="full"
                  color="gray.default"
                >
                  <Icon as={FaTwitter} mr={1} />
                  <Text>ツイート</Text>
                </Button>
              </Flex>
              <Divider />
              <Flex p={4} direction="column" gap={2}>
                <Flex>
                  <Avatar
                    name="tongari"
                    src="https://storage.googleapis.com/zenn-user-upload/avatar/72e7ed4e72.jpeg"
                    size="lg"
                  />
                  <Flex direction="column" justifyContent="center">
                    <Text fontWeight="bold" fontSize="sm">
                      とんがり@ntogawa
                    </Text>
                    <Flex p={2} gap={2}>
                      <Link href="">
                        <Icon as={FaTwitter} color="gray.default" />
                      </Link>
                      <Link href="">
                        <Icon as={FaGithub} color="gray.default" />
                      </Link>
                    </Flex>
                  </Flex>
                </Flex>
                <Text whiteSpace="pre-wrap">
                  ここには自己紹介が入ります！
                  <br />
                  whiteSpace={'"'}pre-wrap{'"'}
                  を指定して、brタグを入れることで改行もできます。
                  {"\n"}
                  \nでもOK！
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Home;
