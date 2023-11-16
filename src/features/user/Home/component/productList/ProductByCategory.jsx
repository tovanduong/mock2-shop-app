import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getProductByCategory } from '../../../../../api/userAPI';
import ItemCard from '../../../../../components/common/itemCard/ItemCard';
import '../../home.scss';

const ProductByCategory = () => {
  const [listItem, setListItem] = useState([]);
  const location = useLocation();
  const item = location.pathname.slice(1).replace('%20', ' ');
  useEffect(() => {
    getProductByCategory({ item }).then((data) => setListItem(data));
    // dispatch(fetchGetAllProduct());
    // dispatch(fetchGetAllCategory());
  }, [item]);

  return (
    <Box className="section-box">
      <Container>
        <Box className="Home__GroupCate">
        </Box>
        <Box mb={3} mt={3}>
          <Box className="breadCrum">
            <Stack spacing={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                <Link className="breadCrum-content" to="/">
                  Home
                </Link>
                <Typography color="text.primary" className="breadCrum-content">
                  {item}
                </Typography>
              </Breadcrumbs>
            </Stack>
          </Box>
          <Typography variant="h4" className="">
            {item}
          </Typography>

          <Grid
            container
            spacing={{ xs: 1, md: 2, xl: '10px' }}
            columns={{ xs: 12, sm: 12, md: 12, xl: 12 }}
          >
            {listItem.length &&
              listItem[0]?.Product?.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                    <ItemCard {...item} handleAdd={() => {}} />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductByCategory;
