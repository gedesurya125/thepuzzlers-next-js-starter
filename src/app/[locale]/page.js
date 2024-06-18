import { Box, Heading, Paragraph, Section } from 'theme/components';

export default function Home() {
  const preSetup = [
    'sitemap',
    'internationalization',
    'path aliases',
    'matomo',
    'default components',
    'fonts',
    'elements',
    'colors',
    'manual revalidation api'
  ];

  return (
    <Box as="main">
      <Section>
        <Heading
          sx={{
            variant: 'text.primary-135-normal',
            gridColumn: ['1/13', '1/13', '1/25', '1/25'],
            fontSize: ['5rem', '6rem', '6rem', '7rem'],
            mt: '4rem'
          }}>
          The Puzzlers NextJs Starter
        </Heading>
        <Heading
          sx={{
            variant: 'text.body-135-normal',
            gridColumn: ['1/13', '1/13', '1/25', '1/25'],
            fontSize: ['2rem', '2rem', '3rem', '3rem']
          }}>
          Let`s Create Amazing Project !!! 🎉
        </Heading>
        <Heading
          sx={{
            variant: 'text.primary-135-normal',
            gridColumn: ['1/13', '1/13', '1/25', '1/25'],
            fontSize: ['2.6rem', '3rem', '3rem', '3rem'],
            mt: '4rem'
          }}>
          Pre-Setups:
        </Heading>

        <Box
          as="ul"
          sx={{
            gridColumn: ['1/13', '1/13', '1/25', '1/25']
          }}>
          {preSetup.map((data, index) => {
            return <ListItem key={index}>{data}</ListItem>;
          })}
        </Box>
      </Section>
    </Box>
  );
}

const ListItem = ({ children }) => {
  return (
    <Paragraph
      as="li"
      sx={{
        variant: 'text.body-135-normal',
        fontSize: ['1.8rem', '2rem', '2rem', '2rem']
      }}>
      {children}
    </Paragraph>
  );
};
