import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, styled } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

// eslint-disable-next-line react/prop-types
export default function DeleteCardItemDialog({ onClickDialog, openDialog, onClickDelete }) {

    const handleClose = () => {
        onClickDialog(false);
    };

    const CustomDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(2),
        },
    }));

    return (
        <>
            <CustomDialog
                open={openDialog}
                onClose={handleClose}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "350px",  // Set your width here
                        },
                    },
                }}>
                <Box position='relative'>
                    <DialogTitle>
                        Удаление товара
                    </DialogTitle>
                    <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            right: 16,
                            transform: 'translateY(-50%)'
                        }}>
                        <CloseIcon fontSize="medium" />
                    </IconButton>
                </Box>
                <Divider />
                <DialogContent>
                    Удалить выбранный товар? Отменить действие будет невозможно.
                </DialogContent>
                <DialogActions>
                    <Box display='flex' justifyContent='space-between' flexGrow={1}>
                        <Button
                            variant='contained'
                            color='error'
                            onClick={onClickDelete}
                            sx={{ flexGrow: 1, marginRight: 2 }}>
                            Удалить
                        </Button>
                        <Button
                            variant='outlined'
                            onClick={handleClose}
                            sx={{ flexGrow: 1 }}>
                            Оставить
                        </Button>
                    </Box>
                </DialogActions>
            </CustomDialog>
        </>
    )
}
