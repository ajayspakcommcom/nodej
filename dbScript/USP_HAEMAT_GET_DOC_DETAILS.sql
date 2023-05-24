drop PROCEDURE USP_HAEMAT_GET_DOC_DETAILS
go
-- USP_HAEMAT_GET_DOC_DETAILS 1000
------------------------------
-- CREATED BY: GURU SINGH
-- CREATED DATE: 24-MAY-2023
------------------------------
CREATE PROCEDURE USP_HAEMAT_GET_DOC_DETAILS
(
    @doctorId INT = NULL
)
as
    set NOCOUNT on;
        select d.doctorID, d.customerCode, d.doctorName,  s.specialtyName, 
             d.cityName, st.StateName, d.hospitalName   
             from tbldoctors d
            INNER JOIN tblspecialty s on s.specialtyId = d.specialtyId and s.isActive = 0
            INNER JOIN states st on st.StateID = d.stateID  
            where d.doctorID = @doctorId

            EXEC USP_GET_MEDICINES_LIST 'HAEMAT'

    set NOCOUNT off; 

